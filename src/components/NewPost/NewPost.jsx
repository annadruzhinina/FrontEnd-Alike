//import react
import React from "react";
import { PostModal } from "../PostModal/PostModal";

export default function BasicModal({ onClose, setToggle }) {
  const handlePopupClose = () => {
    onClose();
  };

  return (
    <PostModal
      post={{}}
      onClose={handlePopupClose}
      title="Create New Post"
      setToggle={setToggle}
    />
  );
}
