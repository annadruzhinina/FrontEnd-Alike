//Import React
import React from "react";
//Import ccs
import "./post.css";
//Import Material ui & React Icon
import { RxCross2 } from "react-icons/rx";
import { deletePost } from "../../services/postApi";
import { FaRegCommentDots } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

function Post({ post, user, setToggle }) {
  let username = "";
  for (let i = 0; i < user.length; i++) {
    if (user[i] !== undefined) {
      username = user[i];
    }
  }
  let activeUser = window.localStorage.getItem("username");
  async function handleDelete() {
    await deletePost(post);
    setToggle((prev) => !prev);
  }
  return (
    <div className="post">
      <div className="post_header">
        <div className="post-avatar_left">
          <h4>
            <strong className="post-project">Project:</strong>
            <span className="post-project__name">{post.project_name}</span>
          </h4>
        </div>
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
  );
}

export default Post;
