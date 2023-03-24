//Import React
import React from "react";
import { useState, useEffect, useRef } from "react";
import { updatePost } from "../../services/postApi";
//Import ccs
import "../Post/post.css";

function EditPost( {showPopup, setShowPopup, postData, setPostData, setToggle, post}) {
    let activeUser = window.localStorage.getItem("username");
    const popupRef = useRef(null);
    const handleUpdate = async () => {
        await updatePost(postData);
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
        <h3>Edit Post</h3>
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
        <label htmlFor="image">Image URL:</label>
        <input
            type="text"
            name="image"
            value={postData.image}
            onChange={(e) =>
            setPostData({ ...postData, image: e.target.value })
            }
        />
        <div className="popup-btns">
        <button onClick={handleUpdate}>Save</button>
        {/* <button
            onClick={() => {
            handlePopupClose();
            console.log("Popup closed");
            }}
        >
            Cancel
        </button> */}
        </div>
        </div>
    </div>
  )
}

export default EditPost