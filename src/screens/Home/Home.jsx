//Import React
import React, { useState, useEffect } from 'react'
// Import ccs
import './home.css'
import Post from '../../components/Post/Post.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { getPosts } from '../../services/postApi.js'
import { getUsers } from '../../services/userApi.js'
import NewRightNavbar from '../../components/NewRightNavbar/NewRightNavbar'
import Searchbar from '../../components/Searchbar/Searchbar'

function Home({ toggle, setToggle }) {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [filteredPosts, setFilteredPosts] = useState([])

  const searchPosts = searchValue => {
    setSearchInput(searchValue)
    if (searchValue !== '') {
      const filteredData = posts.filter(post => {
        if (
          post.project_name.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return true
        }
        return false
      })
      setFilteredPosts(filteredData)
    }
  }

  useEffect(() => {
    getPosts()
      .then(posts => {
        function compareFn(postA, postB) {
          if (postA.id > postB.id) {
            return 1
          }
          if (postA.id < postB.id) {
            return -1
          }
          // a must be equal to b
          return 0
        }

        setPosts(posts.data.sort(compareFn))
      })
      .then(
        getUsers().then(users => {
          setUsers(users)
        })
      )
  }, [toggle])

  return (
    <div className='home'>
      <div className='home-global'>
        <Searchbar searchPosts={searchPosts} />
        <Navbar setToggle={setToggle} toggle={toggle} />
        <div className='home-content'>
          <div className='home-content_center'>
            <div className='home-center'>
              {posts && users && searchInput.length > 0
                ? filteredPosts
                    .slice(0)
                    .reverse()
                    .map((post, index) => {
                      let user = users.map((user, index) => {
                        if (post.username === user.id) return user.username
                      })
                      return (
                        <Post
                          key={index}
                          user={user}
                          post={post}
                          setToggle={setToggle}
                        />
                      )
                    })
                : posts
                    .slice(0)
                    .reverse()
                    .map((post, index) => {
                      let user = users.map((user, index) => {
                        if (post.username === user.id) return user.username
                      })
                      return (
                        <Post
                          key={index}
                          user={user}
                          post={post}
                          setToggle={setToggle}
                        />
                      )
                    })}
            </div>
          </div>
          {<NewRightNavbar />}
        </div>
      </div>
    </div>
  )
}

export default Home
