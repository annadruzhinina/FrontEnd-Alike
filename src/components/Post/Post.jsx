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

function Post({ post, user }) {
  let username = "";
  for (let i = 0; i < user.length; i++) {
    if (user[i] !== undefined) {
      username = user[i];
    }
  }
  // const post = props.post
  // const heartButton = document.getElementById("heart-button");

  // function handlePostLikeClick(e, clickedPost, elementId) {
  //   e.preventDefault();
  //   console.log("You clicked like.", elementId);

  //   // post data update
  //   if (!post.liked) {
  //     clickedPost.heartQty = clickedPost.heartQty + 1;
  //     clickedPost.liked = true;
  //     onPostLikeClick(clickedPost);

  //     // animation
  //     setTimeout(() => {
  //       const heartButton = document.getElementById(elementId);
  //       heartButton.classList.add("hearted");
  //       setTimeout(() => {
  //         heartButton.classList.remove("hearted");
  //       }, 5000);
  //     }, 100);
  //     // call API to save to database
  //     // TODO API call
  //   }
  // }

  // function likeButton(postLiked) {
  //   if (postLiked) {
  //     return <FcLike className="heart-button-icon heart-button-icon-liked" />;
  //   } else {
  //     return <FcLikePlaceholder className="heart-button-icon" />;
  //   }
  // }

  return (
    <div className='post'>
      <div className='post_header'>
        <div className='post-avatar_left'>
          <Avatar
            className='post-avatar'
            alt='Anna'
            src='./image/avatar.jpeg'
          ></Avatar>
          <h3>{username}</h3>
        </div>
        <RxCross2
          onClick={() => deletePost(post)}
          className='post-delete-btn'
        />
      </div>
      <img className='post-image' src={post.image} alt='' />
      <div className='post-bottom'>
        <div className='post-like-title'>
          {/* <button
            id={"like-" + post.id}
            className={
              post.liked ? "heart-button-liked heart-button" : "heart-button"
            }
            onClick={(e) => handlePostLikeClick(e, post, "like-" + post.postID)}
          >
            {likeButton(post.liked)}

            <span className="heart-button-heartQty">{post.likes}</span>
          </button> */}
          <h4>
            <strong className="post-project__name">Project:</strong>{" "}
            {post.project_name}
          </h4>
        </div>
        <a className='btn' target='_blank' href={post.github_link}>
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Post;
