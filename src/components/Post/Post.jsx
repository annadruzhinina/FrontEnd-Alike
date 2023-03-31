//Import React
import React from "react";
import { useState, useEffect, useRef } from "react";
//Import ccs
import "./post.css";
//Import Material UI & React Icon
import { RxCross2 } from "react-icons/rx";
import { FaRegCommentDots, FaEdit } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";

// Import postAPI configuration
import { deletePost, updatePost } from "../../services/postApi";

import EditPost from "../EditPost/EditPost.jsx";
//Import Components
// import Comment from "../../components/Comment/Comment.jsx";

//import heart Icon
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

export default function Post({ post, user, setToggle }) {
  const [showPopup, setShowPopup] = useState(false);

  const [heart, setHeart] = useState(false);

  let username = "";
  for (let i = 0; i < user.length; i++) {
    if (user[i] !== undefined) {
      username = user[i];
    }
  }

  let activeUser = window.localStorage.getItem("username");

  async function handleDelete() {
    await deletePost(post.id);
    setToggle((prev) => !prev);
  }

  function likeButton() {
    // <FcLikePlaceholder/> ?  <FcLike/> : <FcLikePlaceholder/>;
    if (heart === false) {
      setHeart(true);
      return <FcLike />;
    }
  }

  return (
    <>
      <div className="post">
        <div className="demo post_header">
          <div className="post-avatar_left">
            <h4>
              <strong className="post-project">Project:</strong>
              <span className="post-project__name">{post.project_name}</span>
            </h4>
          </div>
          {activeUser === username ? (
            <IconContext.Provider value={{ color: "black" }}>
              <RxCross2 onClick={handleDelete} className="post-delete-btn" />
            </IconContext.Provider>
          ) : (
            <></>
          )}
        </div>
        <img className="post-image" src={post.image} alt="" />
        <div className="post-bottom">
          <div className="post-bottom-left">
            <div className="post-like-title">
              <h3>{username}</h3>
              {/* <FaRegCommentDots className="post-navbar-menu__icon" /> */}
              <a
                // className="post-github post-navbar-menu__icon"
                target="_blank"
                href={post.github_link}
              >
                <IconContext.Provider value={{ color: "rgb(46 127 194)" }}>
                  <GoMarkGithub
                    className="post-navbar-menu__icon"
                    onMouseOver={({ target }) => (target.style.color = "black")}
                    onMouseOut={({ target }) =>
                      (target.style.color = "rgb(46 127 194)")
                    }
                  />
                </IconContext.Provider>
              </a>
            </div>
          </div>
          <div className="right-icons">
            {activeUser === username ? (
              <IconContext.Provider
                value={{ color: "rgb(46 127 194)", size: "1.5rem" }}
              >
                <FaEdit
                  onClick={() => setShowPopup(true)}
                  className="post-update-btn post-navbar-menu__icon"
                  onMouseOver={({ target }) => (target.style.color = "black")}
                  onMouseOut={({ target }) =>
                    (target.style.color = "rgb(46 127 194)")
                  }
                />
              </IconContext.Provider>
            ) : (
              <></>
            )}
            {heart === false ? (
              <FcLikePlaceholder
                onClick={() => setHeart(true)}
                className="post-heart"
              />
            ) : (
              <FcLike className="post-heart" onClick={() => setHeart(false)} />
            )}
            <span className="post-hearQty">0</span>
          </div>
        </div>
        {showPopup && (
          <EditPost
            setShowPopup={setShowPopup}
            setToggle={setToggle}
            post={post}
          />
        )}
      </div>
    </>
  );
}
