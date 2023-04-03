//Import React
import React from "react";
import { useState, useEffect, useRef } from "react";
import { updatePost, createPost } from "../../services/postApi";
import UploadWidget from "../UploadWidget/UploadWidget.jsx";

//Import ccs
import "../Post/post.css";
import swal from "sweetalert";

export function PostModal({ onClose, setToggle, post, title }) {
  const isEditPost = Boolean(post.id);
  const [postData, setPostData] = useState(post);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true); // Add state variable for disabled state
  // Hook, we save there ref to our element
  const popupRef = useRef(null);
  // post - list of our posts
  // prevPost - prev post
  // newPostData - new post
  const setPostDataCb = (newPostData) => (prevPost) => {
    const newPost = { ...prevPost, ...newPostData };
    // Here we are working only with new post
    const cloudinaryUrl = window.localStorage.getItem("cloud");
    const urlTest = cloudinaryUrl || post.image;
    // Compare newPost and post
    const shouldDisable =
      post.image === urlTest &&
      newPost.project_name === post.project_name &&
      newPost.github_link === post.github_link;
    // Check we don't have empty fields
    const isSomethingMissing =
      !newPost.project_name || !newPost.github_link || !urlTest;
    setIsSaveDisabled(shouldDisable || isSomethingMissing);

    return { ...newPost, image: urlTest };
  };

  const handleUpdate = async () => {
    if (isEditPost) {
      await updatePost(postData, post.id);
    } else {
      await createPost(postData);
    }

    // Removes cloudinaryUrl after submission of post update
    window.localStorage.removeItem("cloud");
    if (setToggle) {
      setToggle((prev) => !prev);
    }
    handlePopupClose();
  };

  const handlePopupClose = () => {
    onClose();
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
    console.log("UseEffect");
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="popup-container" onClick={handleClickOutside}>
      <div className="popup" ref={popupRef}>
        <div className="EditHeader">
          <h3>{title}</h3>
        </div>

        <label htmlFor="project_name">Project Name: *</label>
        <input
          type="text"
          name="project_name"
          value={postData.project_name}
          onChange={(e) => {
            if (e.target.value.length <= 30) {
              setPostData(setPostDataCb({ project_name: e.target.value }));
            } else if (e.target.value.length > 30) {
              swal(
                "Oops!",
                "Please limit your input to 30 characters or less!",
                "warning"
              );
              // alert("Please limit your input to 30 characters or less.");
            }
          }}
        />
        <label htmlFor="github_link">GitHub Link: *</label>
        <input
          max={30}
          type="text"
          name="github_link"
          value={postData.github_link}
          onChange={(e) =>
            setPostData(setPostDataCb({ github_link: e.target.value }))
          }
          required
        />
        <UploadWidget
          className="UploadWidget"
          onSelected={() => {
            setPostData(setPostDataCb({}));
          }}
        />

        <div className="popup-btns">
          <button className="edit_btns" onClick={handlePopupClose}>
            Cancel
          </button>
          <button
            type="submit"
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
