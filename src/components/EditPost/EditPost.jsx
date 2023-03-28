//Import React
import React from "react";
import { useState, useEffect, useRef } from "react";
import { updatePost } from "../../services/postApi";
import UploadWidget from "../UploadWidget/UploadWidget.jsx";

//Import ccs
import "../Post/post.css";

function EditPost({ showPopup, setShowPopup, setToggle, post }) {
  const [postData, setPostData] = useState(post);
  const [isSaveDisabled, setIsSaveDisabled] = useState(false); // Add state variable for disabled state
  const popupRef = useRef(null);
  const handleUpdate = async () => {
    let cloudinaryUrl = window.localStorage.getItem("cloud");
    let urlTest = !cloudinaryUrl ? post.image : cloudinaryUrl;
    if (
      post.project_name === postData.project_name &&
      post.github_link === postData.github_link &&
      post.image === urlTest
    ) {
      return;
    }
    console.log(cloudinaryUrl);
    await updatePost(
      {
        project_name: postData.project_name,
        github_link: postData.github_link,
        // Sets image to the current post image URL if cloudinaryUrl does not exist; otherwise, uses cloudinaryUrl
        image: !cloudinaryUrl ? post.image : cloudinaryUrl,
      },
      post.id
    );
    console.log(post);
    console.log(postData);
    if (cloudinaryUrl) {
      setPostData({ ...postData, image: cloudinaryUrl });
    }

    setToggle((prev) => !prev);
    setShowPopup(false);
    // Removes cloudinaryUrl after submission of post update
    window.localStorage.removeItem("cloud");
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setPostData(post);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      handlePopupClose();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      handlePopupClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  console.log(postData);
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="EditHeader">
          <h3>Edit Post</h3>
        </div>
        <label htmlFor="project_name">Project Name:</label>
        <input
          type="text"
          name="project_name"
          value={postData.project_name}
          onChange={
            (e) => setPostData({ ...postData, project_name: e.target.value })
            // setIsSaveDisabled(false)
          }
        />
        <label htmlFor="github_link">GitHub Link:</label>
        <input
          type="text"
          name="github_link"
          value={postData.github_link}
          onChange={
            (e) => setPostData({ ...postData, github_link: e.target.value })
            // setIsSaveDisabled(false)
          }
        />
        <UploadWidget className="UploadWidget" />

        <div className="popup-btns">
          <button
            className="edit_btns"
            onClick={() => {
              handlePopupClose();
            }}
          >
            Cancel
          </button>
          <button
            className="edit_btns"
            onClick={handleUpdate}
            disabled={isSaveDisabled}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
