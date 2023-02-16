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
import { create } from "@mui/material/styles/createTransitions";

import UploadWidget from '../UploadWidget/UploadWidget.jsx';


//css style
import "./newpost.css";
import { MdLibraryBooks } from "react-icons/md";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ icon, title, className, setToggle }) {
  const [open, setOpen] = useState(false);

  const projectNameRef = React.useRef(null);
  const githubRef = React.useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function handleSubmit() {
    let cloudinaryUrl = window.localStorage.getItem('cloud')
    let username = window.localStorage.getItem('username')
    await createPost({
      username: username,
      project_name: projectNameRef.current.value,
      github_link: githubRef.current.value,
      // tagsRef.current.value,
      image: cloudinaryUrl,
    });
    setToggle(prev => !prev)
    handleClose()
  }
  return (
    <div>
      <Link key="new-post" className="navbar-menu__item" onClick={handleOpen}>
        {icon}
        <span className="navbar-menu__text">{title}</span>
      </Link>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <UploadWidget />
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
