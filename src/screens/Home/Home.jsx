import React, { useState, useEffect } from "react";
import "./home.css";
import Post from "../../components/Post/Post.jsx";
import Navbar from "../../components/Navbar/Navbar";
import RightNavbar from "../../components/RightNavbar/RightNavbar";
import CreatePostModal from "../../components/CreatePostModal/CreatePostModal.jsx";
import usePostData from "../../Hooks/usePostData.js";
import useUserData from "../../Hooks/useUserData.js"
// import useUserData from "../../Hooks/useUserData.js";

  
  // username, project, github, imageUrl
function Home() {
  // const [posts, setPosts] = useState([])
  const posts = usePostData()
  const users = useUserData()
  console.log(users)
  console.log(posts)

  // const [users, setUsers] = useState([])
  // const userData = useUserData()

  // useEffect(() => setUsers(userData), [])

  // useEffect(() => setPosts(postData), [])

  // const [posts, setPosts] = useState([])
  // const postData = usePostData()

  // Renders only once
  // useEffect(() => setPosts(postData), [])

  // useEffect(() => setUsers(userData), [])

  // checking if a post has been liked, here we avoid on multi clicks

  // function handlePostLikeClick(updatedPost) {
  //   console.log("Handle Post Update", updatedPost);
  //   const newPosts = posts.map((post) => {
  //     if (post.id === updatedPost.id) return updatedPost;
  //     return post;
  //   });
  //   setPosts(newPosts);
  // }
  // if (!posts) return <h1>Loading . . .</h1>
  return (
    <div className="home">
      <div className="home-global">
        <Navbar />
        <div className="home-content">
          <div className="home-content_center">
            <div className="home-center">
              {posts && users &&
              posts.map((post, index) => {

                let user = users.map((user, index) => {
                  if (post.username === user.id)
                  return user.username
                })
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