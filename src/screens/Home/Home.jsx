//Import React
import React, { useState, useEffect } from "react";
// Import ccs
import "./home.css";
// Import Components
import Post from "../../components/Post/Post.jsx";
import Navbar from "../../components/Navbar/Navbar";
import RightNavbar from "../../components/RightNavbar/RightNavbar";
import Footer from "../../components/Footer/Footer.jsx";
// Import Hooks
import usePostData from "../../Hooks/usePostData.js";
import useUserData from "../../Hooks/useUserData.js";

// username, project, github, imageUrl
function Home() {
  const posts = usePostData();
  const users = useUserData();
  

  // checking if a post has been liked, here we avoid on multi clicks

  // function handlePostLikeClick(updatedPost) {
  //   console.log("Handle Post Update", updatedPost);
  //   const newPosts = posts.map((post) => {
  //     if (post.id === updatedPost.id) return updatedPost;
  //     return post;
  //   });
  //   setPosts(newPosts);
  // }

  return (
    <div className="home">
      <div className="home-global">
        <Navbar />
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
                        // onPostLikeClick={handlePostLikeClick}
                      />
                    );
                  })}
            </div>
          </div>
          <RightNavbar />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
