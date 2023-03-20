// Import React
import { useState, useEffect } from "react";
// Import css
import "./profile.css";
// Import Material UI
import Avatar from "@mui/material/Avatar";
// Import Components
import Navbar from "../../components/Navbar/Navbar.jsx";
// Import Hooks
import { getPosts } from "../../services/postApi.js";
import { getUsers } from "../../services/userApi.js";
import Post from "../../components/Post/Post.jsx";
function Profile() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  let username = window.localStorage.getItem("username");
  let usernameID = "";

  console.log(username);

  for (let i = 0; i < users.length; i++) {
    console.log(users[i].username);
    if (users[i].username === username) {
      usernameID = users[i].id;
    }
  }

  console.log(`User ID: ${usernameID}`);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getPosts()
      .then((posts) => {
        setPosts(posts.data);
      })
      .then(
        getUsers().then((users) => {
          setUsers(users);
        })
      );
  }, [toggle]);

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
              {/* <h1 class="profile-user-name">{username}</h1> */}
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
                <span class="profile-real-name">{username}'s profile</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="gallery--list ">
            {posts &&
              users &&
              posts
                .slice(0)
                .filter((post) => post.username === usernameID)
                .reverse()
                .map((post, index) => {
                  console.log(post);
                  let user = users.map((user, index) => {
                    if (post.username === user.id) return user.username;
                  });
                  return (
                    <Post
                      key={index}
                      user={user}
                      post={post}
                      setToggle={setToggle}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
