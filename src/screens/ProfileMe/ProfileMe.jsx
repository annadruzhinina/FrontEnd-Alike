// Import React
import React from "react";
// Import css
import "./profileme.css";
// Import Material UI
import Avatar from "@mui/material/Avatar";
// Import Components
import Navbar from "../../components/Navbar/Navbar.jsx";
// Import Hooks
import usePostData from "../../Hooks/usePostData.js";

function ProfileMe() {
  const posts = usePostData();

  function handleGAClick() {
    window.open("https://generalassemb.ly/");
  }

  return (
    <>
      <div className="header">
        <Navbar />
        <div class="profile-container">
          <div class="profile">
            <div class="profile-image">
              <img
                onClick={handleGAClick}
                className="profile-image-png"
                src="./image/gaLogo.png"
                alt=""
              />
            </div>
            <div class="profile-user-settings">
              <h1 class="profile-user-name">janedoe_</h1>
            </div>
            <div class="profile-stats">
              <ul>
                <li>
                  <span class="profile-stat-count">164</span> posts
                </li>
                <li>
                  <span class="profile-stat-count">188</span> followers
                </li>
                <li>
                  <span class="profile-stat-count">206</span> following
                </li>
              </ul>
            </div>
            <div class="profile-bio">
              <p>
                <span class="profile-real-name">Jane Doe</span> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit ❤️❤️❤️
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="gallery--list ">
            {posts &&
              // users &&
              posts
                .slice(0)
                .reverse()
                .filter((post) => post.username === 2)
                .map((post, index) => {
                  // let user = users.map((user, index) => {
                  //   if (post.username === user.id) return user.username;
                  // });
                  return (
                    <>
                      <div className="profile-gallery-item" tabindex="0">
                        <img
                          src={post.image}
                          class="profile-gallery-image"
                          alt=""
                        />
                        <div className="profile-gallery-item-info"></div>
                      </div>
                    </>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileMe;
