//Import React
import React from "react";
import { useState, useEffect, useRef } from "react";
//Import ccs
import "./post.css";
//Import Material UI & React Icon
import { RxCross2 } from "react-icons/rx";
import { FaRegCommentDots, FaEdit } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

// Import postAPI configuration
import { deletePost, updatePost } from "../../services/postApi";

//Import Components
// import Comment from "../../components/Comment/Comment.jsx";

export default function Post({ post, user, setToggle }) {
  const [showPopup, setShowPopup] = useState(false);
  const [postData, setPostData] = useState(post);
  const popupRef = useRef(null);

  let username = "";
  for (let i = 0; i < user.length; i++) {
    if (user[i] !== undefined) {
      username = user[i];
    }
  }

  let activeUser = window.localStorage.getItem("username");

  const handleUpdate = async () => {
    await updatePost(postData);
    setToggle((prev) => !prev);
    setShowPopup(false);
  };

  async function handleDelete() {
    await deletePost(post);
    setToggle((prev) => !prev);
  }

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
    <>
      <div className="post">
        <div className="post_header">
          <div className="post-avatar_left">
            <h4>
              <strong className="post-project">Project:</strong>
              <span className="post-project__name">{post.project_name}</span>
            </h4>
          </div>
          {activeUser === username ? (
            <FaEdit
              onClick={() => setShowPopup(true)}
              className="post-update-btn"
            />
          ) : (
            <></>
          )}
          {activeUser === username ? (
            <RxCross2 onClick={handleDelete} className="post-delete-btn" />
          ) : (
            <></>
          )}
        </div>
        <img className="post-image" src={post.image} alt="" />
        <div className="post-bottom">
          <div className="post-like-title">
            <h3>{username}</h3>
            <FaRegCommentDots className="post-navbar-menu__icon" />
          </div>
          <a target="_blank" href={post.github_link}>
            <GoMarkGithub className="post-navbar-menu__icon" />
          </a>
        </div>
      </div>
      {showPopup && (
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
      )}
    </>
  );
}
