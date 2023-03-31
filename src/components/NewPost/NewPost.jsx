//import react
import React from "react";
import { PostModal } from "../PostModal/PostModal";

export default function BasicModal({ onClose }) {
  const handlePopupClose = () => {
    onClose();
  };

  return (
    <PostModal post={{}} onClose={handlePopupClose} title="Create New Post" />
  );
}
