//Import React
import React from "react";
import { PostModal } from "../PostModal/PostModal";

function EditPost({ setShowPopup, setToggle, post }) {
  const handlePopupClose = () => {
    // Stop rendering
    setShowPopup(false);
  };

  return (
    <PostModal
      post={post}
      onClose={handlePopupClose}
      setToggle={setToggle}
      title="Edit Post"
    />
  );
}

export default EditPost;
