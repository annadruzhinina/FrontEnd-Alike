import React, { useState, useEffect } from 'react'
import './home.css'
import Post from '../../components/Post/Post.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { getPosts } from '../../services/postApi.js'
import { getUsers } from '../../services/userApi.js'
import Footer from '../../components/Footer/Footer.jsx'
import RightNavbar from '../../components/RightNavbar/RightNavbar.jsx'


function Home() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [toggle, setToggle] = useState(false)
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    // console.log('useEffect Triggered')
    getPosts().then((posts) => {
      // console.log('setPosts')
      setPosts(posts.data)
      // console.log(posts)
    })
    getUsers().then((users) => {
      // console.log('setUsers')
      setUsers(users.data)
      // console.log(users)
    })
  }, [toggle])

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
        <Navbar setToggle={setToggle}/>
        <div className='home-content'>
          <div className='home-content_center'>
            <div className='home-center'>
              {posts &&
                users &&
                posts.slice(0).reverse().map((post, index) => {
                  let user = users.map((user, index) => {
                    if (post.username === user.id) return user.username
                  })
                  return (
                    <Post
                      key={index}
                      user={user}
                      post={post}
                      setToggle={setToggle}
                      // onPostLikeClick={handlePostLikeClick}
                    />
                  )
                })}
            </div>
          </div>
          <RightNavbar />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
