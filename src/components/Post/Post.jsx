import React from "react";
import "./post.css";
import Avatar from "@mui/material/Avatar";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

function Post({ post, onPostLikeClick }) {
  // const heartButton = document.getElementById("heart-button");

  function handlePostLikeClick(e, clickedPost, elementId) {
    e.preventDefault();
    console.log("You clicked like.", elementId);

    // post data update
    if (!post.liked) {
      clickedPost.heartQty = clickedPost.heartQty + 1;
      clickedPost.liked = true;
      onPostLikeClick(clickedPost);

      // animation
      setTimeout(() => {
        const heartButton = document.getElementById(elementId);
        heartButton.classList.add("hearted");
        setTimeout(() => {
          heartButton.classList.remove("hearted");
        }, 5000);
      }, 100);
      // call API to save to database
      // TODO API call
    }
  }

  function likeButton(postLiked) {
    if (postLiked) {
      return <FcLike className="heart-button-icon heart-button-icon-liked" />;
    } else {
      return <FcLikePlaceholder className="heart-button-icon" />;
    }
  }

  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post-avatar"
          alt="Anna"
          src="./image/avatar.jpeg"
        ></Avatar>
        <h3>{post.username}</h3>
      </div>
      <img className="post-image" src={post.imageUrl} alt="" />
      <div className="post-bottom">
        <div className="post-like-title">
          <button
            id={"like-" + post.id}
            className={
              post.liked ? "heart-button-liked heart-button" : "heart-button"
            }
            onClick={(e) => handlePostLikeClick(e, post, "like-" + post.id)}
          >
            {likeButton(post.liked)}

            <span className="heart-button-heartQty">{post.heartQty}</span>
          </button>
          <h4>Project: {post.project}</h4>
        </div>
        <a className="btn" target="_blank" href={post.github}>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Post;
