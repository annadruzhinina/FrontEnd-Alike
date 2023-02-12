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
        // console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handlePostLikeClick(updatedPost) {
    console.log("Handle Post Update", updatedPost);
    const newPosts = posts.map((post) => {
      if (post.id === updatedPost.id) return updatedPost;
      return post;
    });
    setPosts(newPosts);
  }

  return (
    <div className="home">
      <div className="home-global">
        <div className="home-left">
          <Navbar />
        </div>
        <div className="home-center-right">
          <div className="home-center">
            {posts.map((post, index) => {
              // console.log(post);
              return (
                <Post
                  key={index}
                  post={post}
                  onPostLikeClick={handlePostLikeClick}
                />
              );
            })}
          </div>
          <div className="home-right">
            <RightNavbar />
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <h1>hello</h1>
      </footer>
    </div>
  );
}

export default Home;
