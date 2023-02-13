// Import React
import React, { useState } from "react";
// Import css for rightNavbar
import "./rightNavbar.css";
// Import Avatar from mui
import Avatar from "@mui/material/Avatar";
import MemberInfo from "../MemberInfo/MemberInfo.jsx";

// our function
function RightNavbar({ username, imageUrl, github }) {
  const [avatar, setAvatars] = useState([
    {
      username: "Ari",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/argurjanaolloni",
    },
    {
      username: "Anna",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/annadruzhinina",
    },
    {
      username: "Jose",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/HowzayCalderon",
    },
    {
      username: "Nick",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/NickFasulo",
    },
    {
      username: "Ryan",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/Jagerziel",
    },
    {
      username: "Vasilis",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/Vasilis89",
    },
    {
      username: "Ron",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/RonLanzilotta",
    },
    {
      username: "Jimy",
      imageUrl: "./image/avatar.jpeg",
      github: "https://github.com/jallen2787",
    },
  ]);

  return (
    // created a navBar for the right side, this area is open to having different content. Some ideas: creating a meet the dev team, creating links to different groups a user can join etc.
    <section className="r-navbar">
      <p className="suggestion">Suggestions for you: </p>
      <div className="right-item-title">Lets share useful information!</div>
      <div className="r-items">
        <div className="r-item">
          <div className="right-team">
            <h4>Welcome General Assembly alumni</h4>
            <div className="team-avatar">
              {avatar.map((member) => {
                return (
                  <MemberInfo
                    key={member.username}
                    username={member.username}
                    imageUrl={member.imageUrl}
                    github={member.github}
                  />
                );
              })}
              <h3>{username}</h3>
              <button className="btn">GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightNavbar;

{
  /* <p>
<a href="www.google.com">Anna</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Ryan</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Jose</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Nick</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Vasilis</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Jimy</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Ron</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button>
</div>
<div className="r-item">
<p>
<a href="www.google.com">Ari</a>
</p>
<p>Expedita, quod.
</p>
<button className="btn">follow</button> */
}
