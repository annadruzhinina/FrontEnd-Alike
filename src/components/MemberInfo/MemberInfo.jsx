import React from "react";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

function MemberInfo({ username, imageUrl, github }) {
  const [avatar, setAvatars] = useState([
    {
      username: "Ari",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/argurjanaolloni"
    },
    {
      username: "Anna",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/annadruzhinina"
    },
    {
      username: "Jose",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/HowzayCalderon"
    },
    {
      username: "Nick",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/NickFasulo"
    },
    {
      username: "Ryan",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/Jagerziel"
    },
    {
      username: "Vasilis",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/Vasilis89"
    },
    {
      username: "Ron",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/RonLanzilotta"
    },
    {
      username: "Jimy",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/jallen2787"
    },
  ])
  return (
    <div className="member">
      {/* <div className="member_header">
        <Avatar className="member-avatar" alt="Anna" src="./image/avatar.jpeg"></Avatar>
        <h3>{username}</h3>
      </div> */}
      <div className="team-avatar">
        {avatar.map((member) => {
          // return (
          //   username = { member.username }
          //     imageUrl = { member.imageUrl }
          // github = { member.github }
          // )
          // )
        })}
        {/* <h3>{username}</h3> */}
        {/* <button className='btn'>GitHub</button> */}
      </div>
      <div className="member-bottom">
        <h4>Project name</h4>
      </div>

      {/* <h4 className="member-text">
        <strong>{username}</strong> {caption}
      </h4> */}
    </div>
  );
}

export default MemberInfo;