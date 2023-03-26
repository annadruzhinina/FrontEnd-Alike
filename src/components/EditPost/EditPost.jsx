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
          <RxCross2
            className="edit_exit"
            onClick={() => {
              handlePopupClose();
              console.log("Popup closed");
            }}
          />
        </div>
        <label htmlFor="project_name">Project Name:</label>
        <input
          type="text"
          name="project_name"
          value={postData.project_name}
          onChange={(e) =>
            setPostData({ ...postData, project_name: e.target.value })
          }
        />
        <label htmlFor="github_link">GitHub Link:</label>
        <input
          type="text"
          name="github_link"
          value={postData.github_link}
          onChange={(e) =>
            setPostData({ ...postData, github_link: e.target.value })
          }
        />
        <UploadWidget
          className="UploadWidget"
          value={cloudinaryUrl}
          onChange={(e) => setPostData({ ...postData, image: e.target.value })}
        />
        {/* <div className="edit_btns">
          <div className="popup-btns">
            <button onClick={handleUpdate}>Сancel</button>
          </div>
          <div className="popup-btns">
            <button onClick={handleUpdate}>Save</button>
          </div>
        </div> */}

        <div className="popup-btns">
          <button onClick={handleUpdate}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
