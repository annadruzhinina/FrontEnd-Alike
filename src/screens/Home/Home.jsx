//Import React
import React, { useState, useEffect } from "react";
// Import ccs
import "./home.css";
import Post from "../../components/Post/Post.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import RightNavbar from "../../components/RightNavbar/RightNavbar.jsx";
import { getPosts } from "../../services/postApi.js";
import { getUsers } from "../../services/userApi.js";

function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
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

  return (
    <div className="home">
      <div className="home-global">
        <Navbar setToggle={setToggle} toggle={toggle}/>
        <div className="home-content">
          <div className="home-content_center">
            <div className="home-center">
              {posts &&
                users &&
                posts
                  .slice(0)
                  .reverse()
                  .map((post, index) => {
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
          <RightNavbar />
        </div>
      </div>
    </div>
  );
}

export default Home;
