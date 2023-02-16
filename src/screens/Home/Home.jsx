import React, { useState, useEffect } from 'react'
import './home.css'
import Post from '../../components/Post/Post.jsx'
import Navbar from '../../components/Navbar/Navbar'
import { getPosts } from '../../services/postApi'
import { getUsers } from '../../services/userApi'
import Footer from '../../components/Footer/Footer.jsx'
import RightNavbar from '../../components/RightNavbar/RightNavbar.jsx'

function Home() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    return async () => {
      const postData = await getPosts()
      setPosts(postData)
    }
  }, [posts])

  useEffect(() => {
    return async () => {
      const userData = await getUsers()
      setUsers(userData)
    }
  }, [users])

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
    <div className='home'>
      <div className='home-global'>
        <Navbar />
        <div className='home-content'>
          <div className='home-content_center'>
            <div className='home-center'>
              {posts &&
                users &&
                posts.map((post, index) => {
                  let user = users.map((user, index) => {
                    if (post.username === user.id) return user.username
                  })
                  return (
                    <Post
                      key={index}
                      user={user}
                      post={post}
                      // onPostLikeClick={handlePostLikeClick}
                    />
                  )
                })}
            </div>
          </div>
          <RightNavbar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
