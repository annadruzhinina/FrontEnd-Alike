//Import React
import React, { useState } from 'react'
//Import ccs
import './post.css'
//Import Material UI & React Icon
import { RxCross2 } from 'react-icons/rx'
import { FaEdit } from 'react-icons/fa'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { GoMarkGithub } from 'react-icons/go'
import { IconContext } from 'react-icons'
// Import postAPI configuration
import { deletePost, updatePost } from '../../services/postApi'
import EditPost from '../EditPost/EditPost.jsx'

export default function Post({ post, user, setToggle }) {
  const [showPopup, setShowPopup] = useState(false)
  const [heart, setHeart] = useState(null)
  const [postLike, setPostLike] = useState(post)

  let username = ''
  for (let i = 0; i < user.length; i++) {
    if (user[i] !== undefined) {
      username = user[i]
    }
  }

  let activeUser = window.localStorage.getItem('username')

  async function handleDelete() {
    await deletePost(post.id)
    setToggle(prev => !prev)
  }

  async function updatingHeartQty(liked) {
    await updatePost(
      {
        project_name: postLike.project_name,
        github_link: postLike.github_link,
        // Sets image to the current postLike image URL if cloudinaryUrl does not exist; otherwise, uses cloudinaryUrl
        image: postLike.image,
        heartQty: postLike.heartQty + liked
      },
      post.id
    )
  }

  function likeButton() {
    setHeart(prev => !prev)
    addLikes()
  }

  let hearts = postLike.heartQty
  async function addLikes() {
    let liked = 0
    if (heart === null) {
      setHeart(true)
      liked = 1
    }
    !heart ? hearts++ : hearts--
    !heart ? (liked = 1) : (liked = -1)
    setPostLike({ ...postLike, heartQty: hearts })
    updatingHeartQty(liked)
  }

  return (
    <>
      <div className='post'>
        <div className='demo post-header'>
          <h4 className='post-avatar_left'>
            <strong className='post-project'>Project:</strong>
            <span className='post-project__name'>{post.project_name}</span>
          </h4>
          <div className='post-top-icons'>
            {activeUser === username ? (
              <IconContext.Provider
                value={{ color: 'rgb(46 127 194)', size: '1.5rem' }}
              >
                <FaEdit
                  onClick={() => setShowPopup(true)}
                  className='post-update-btn post-navbar-menu__icon media'
                  onMouseOver={({ target }) => (target.style.color = 'black')}
                  onMouseOut={({ target }) =>
                    (target.style.color = 'rgb(46 127 194)')
                  }
                />
              </IconContext.Provider>
            ) : (
              <></>
            )}
            {activeUser === username ? (
              <IconContext.Provider value={{ color: 'black' }}>
                <RxCross2 onClick={handleDelete} className='post-delete-btn' />
              </IconContext.Provider>
            ) : (
              <></>
            )}
          </div>
        </div>
        <img className='post-image' src={post.image} alt='' />
        <div className='post-bottom'>
          <div className='post-bottom-left'>
            <div className='post-like-title'>
              <h3>{username}</h3>
              <a target='_blank' href={post.github_link} rel='noreferrer'>
                <IconContext.Provider value={{ color: 'rgb(46 127 194)' }}>
                  <GoMarkGithub
                    className='post-navbar-menu__icon'
                    onMouseOver={({ target }) => (target.style.color = 'black')}
                    onMouseOut={({ target }) =>
                      (target.style.color = 'rgb(46 127 194)')
                    }
                  />
                </IconContext.Provider>
              </a>
            </div>
          </div>
          <div className='post-heart'>
            <button
              className='heart hearted'
              type='button'
              onClick={likeButton}
            >
              {heart === null ? (
                <FcLikePlaceholder className='heart hearted' />
              ) : heart === true ? (
                <FcLike className='heart hearted' />
              ) : (
                <FcLikePlaceholder className='heart hearted' />
              )}
            </button>

            <div className='likeCount'>
              {post.heartQty + (!heart === null ? 1 : heart === true ? 1 : 0)}
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <EditPost
          setShowPopup={setShowPopup}
          setToggle={setToggle}
          post={post}
        />
      )}
    </>
  )
}
