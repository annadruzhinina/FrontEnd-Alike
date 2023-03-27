//Import React
import React from "react";
import { useState, useEffect, useRef } from "react";
import { updatePost } from "../../services/postApi";
import UploadWidget from "../UploadWidget/UploadWidget.jsx";

//Import Material UI & React Icon
import { RxCross2 } from "react-icons/rx";

//Import ccs
import "../Post/post.css";

function EditPost({ showPopup, setShowPopup, setToggle, post }) {
  const [postData, setPostData] = useState(post);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true); // Add state variable for disabled state
  let cloudinaryUrl = window.localStorage.getItem("cloud");
  // const [cloudURL, setCloudURL] = useState(null);
  const popupRef = useRef(null);
  const handleUpdate = async () => {
    console.log(post);
    cloudinaryUrl = window.localStorage.getItem("cloud");
    setPostData({ ...postData, image: cloudinaryUrl });
    await updatePost(
      {
        project_name: postData.project_name,
        github_link: postData.github_link,
        image: postData.image,
      },
      post.id
    );
    console.log(postData);
    setToggle((prev) => !prev);
    setShowPopup(false);
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

  const handleInputChange = (event) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
    setIsSaveDisabled(false); // Enable the "Save" button when input is changed
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="EditHeader">
          <h3 className="edit_header">Edit Post</h3>
        </div>
        <label htmlFor="project_name">Project Name:</label>
        <input
          type="text"
          name="project_name"
          value={postData.project_name}
          onChange={handleInputChange}
        />
        <label htmlFor="github_link">GitHub Link:</label>
        <input
          type="text"
          name="github_link"
          value={postData.github_link}
          onChange={handleInputChange}
        />
        <UploadWidget
          className="UploadWidget"
          value={cloudinaryUrl}
          onChange={(e) => setPostData({ ...postData, image: e.target.value })}
        />

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
