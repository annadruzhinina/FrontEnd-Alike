import React from "react";
import Avatar from "@mui/material/Avatar";
import "./memberinfo.css";

function MemberInfo({ username, imageUrl, github }) {
  return (
    <div className="member">
      <Avatar>{imageUrl}</Avatar>
      <span className="member-name">{username} </span>
      <a href={github} target="_blank">
        GitHub
      </a>
    </div>
  );
}

export default MemberInfo;
