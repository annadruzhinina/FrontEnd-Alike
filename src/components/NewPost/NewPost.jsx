//import react
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
//import material ui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Input, TextField } from "@mui/material";
import "./newpost.css";
import { createPost } from "../../services/postApi";
import UploadWidget from "../UploadWidget/UploadWidget.jsx";

//css style
import "./newpost.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)", 
  width: 450,
  height: 450,
  bgcolor: "#acd6fc",
  p: 2,
};

export default function BasicModal({
  icon,
  title,
  className,
  setToggle,
  toggle,
}) {
  const [open, setOpen] = useState(false);

  const projectNameRef = React.useRef(null);
  const githubRef = React.useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function handleSubmit() {
    let cloudinaryUrl = window.localStorage.getItem("cloud");

    let newPost = await createPost({
      project_name: projectNameRef.current.value,
      github_link: githubRef.current.value,
      image: cloudinaryUrl,
    });

    handleClose();
    setToggle((prev) => !prev);

    // Removes cloudinary url from local storage after post submission
    window.localStorage.removeItem("cloud");
  }
  return (
    <div>
      <Link key="new-post" className="navbar-menu__item" onClick={handleOpen}>
        {icon}
        <span className="navbar-menu__text">{title}</span>
      </Link>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <TextField
            id="outlined-basic"
            label="Project Name"
            variant="outlined"
            inputRef={projectNameRef}
          />
          <TextField
            id="outlined-basic"
            label="Github Link"
            variant="outlined"
            inputRef={githubRef}
          />
          <UploadWidget />
          <div className="new-post-btn">
            <Button onClick={handleSubmit} className="-button">
              Submit
            </Button>
            <Button onClick={handleClose} className="-button">
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
