import React from "react";
import "./post.css";
import Avatar from "@mui/material/Avatar";

function Post({ username, project, github, imageUrl }) {
  const handleClick = () => {
    window.location.href = github;
  };

  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post-avatar"
          alt="Anna"
          src="./image/avatar.jpeg"
        ></Avatar>
        <h3>{username}</h3>
      </div>
      <img className="post-image" src={imageUrl} alt="" />
      <div className="post-bottom">
        <h4>{project}</h4>
        <button className="btn" onClick={handleClick}>
          GitHub
        </button>
      </div>
    </div>
  );
}

export default Post;
