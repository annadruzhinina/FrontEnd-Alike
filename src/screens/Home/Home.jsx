import React, { useState, useEffect } from "react";
import "./home.css";
import Post from "../../components/Post/Post.jsx";
import Navbar from "../../components/Navbar/Navbar";
import RightNavbar from "../../components/RightNavbar/RightNavbar";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="home">
      <div className="home-header">
        <img
          className="home-headerImage"
          src="./image/logo_transparent_bg_new.png"
        />
      </div>
      <h1>Alike</h1>
      <div className="home-global">
        <div className="home-left">
          <Navbar />
        </div>
        <div className="home-center">
          {posts.map((post, index) => (
            <Post
              key={index}
              username={post.username}
              project={post.project}
              github={post.github}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
        <div className="home-right">
          <RightNavbar />
        </div>
      </div>
    </div>
  );
}

export default Home;