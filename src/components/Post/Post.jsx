import React from "react";
import "./post.css";
import Avatar from "@mui/material/Avatar";

function Post({ username, project, github, imageUrl }) {
  // const handleClick = () => {
  //   window.location.href = github;
  // };

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
        <h4>Project: {project}</h4>
        <a
          className="btn"
          // onClick={handleClick}
          target="_blank"
          href={github}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Post;
