//import react
import React from "react";

//import ccs
import "./post.css";

//import components

//import material ui
import Avatar from "@mui/material/Avatar";
import { BiLike } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { deletePost } from '../../services/postApi';
import { FaRegCommentDots } from "react-icons/fa";

function Post({ post, user, setToggle }) {
  let username = "";
  for (let i = 0; i < user.length; i++) {
    if (user[i] !== undefined) {
      username = user[i];
    }
  }

  async function handleDelete(){
    await deletePost(post)
    setToggle(prev => !prev)
  }

  return (
    <div className="post">
      <div className="post_header">
        <div className="post-avatar_left">
          <h4>
            <strong className="post-project">Project:</strong>
            <span className="post-project__name">{post.project_name}</span>
          </h4>
        </div>
        <RxCross2
          onClick={handleDelete}
          className='post-delete-btn'
        />
      </div>
      <img className='post-image' src={post.image} alt='' />
      <div className='post-bottom'>
        <div className='post-like-title'>
          <h3>{username}</h3>
          <FaRegCommentDots className="post-navbar-menu__icon" />
        </div>
        <a className='btn' target='_blank' href={post.github_link}>
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Post;
