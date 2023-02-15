import React from "react";
import "./profile.css";
import Avatar from "@mui/material/Avatar";
import ProfileBar from "../"


function Profile({ username, caption, imageUrl }) {
  return (
    <div className="profile">
      <div className="profileSideBarContainer">

      </div>
      <div className="profileInfoContainer">

      </div>
      <div className="profilePostsContainer">
      </div>













      {/* <div className="post_header">
        <Avatar className="post-avatar" alt="Anna" src="./avatar.jpeg"></Avatar>
        <h3>{username}</h3>
      </div>
      <img className="post-image" src={imageUrl} alt="" />
      <div className="post-bottom">
        <h4>Project name</h4>
        <button className="btn">GitHub</button>
      </div> */}
      {/* <h4 className="post-text">
        <strong>{username}</strong> {caption}
      </h4> */}
    </div>
  );
}

export default Profile;
