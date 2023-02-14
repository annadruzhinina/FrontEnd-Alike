import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input, TextField } from "@mui/material";
import "./newpost.css";
import { Link } from "react-router-dom";

import newPostSubmit from "../../services/new-post.service";

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

export default function BasicModal({ icon, title, className }) {
  const [open, setOpen] = React.useState(false);

  const projectNameRef = React.useRef(null);
  const githubRef = React.useRef(null);
  const tagsRef = React.useRef(null);
  const imageUrlRef = React.useRef(null);
  const imageFileRef = React.useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleSubmit() {
    console.log(projectNameRef.current.value);
    console.log(githubRef.current.value);
    console.log(tagsRef.current.value);
    console.log(imageUrlRef.current.value);

    newPostSubmit(
      projectNameRef.current.value,
      githubRef.current.value,
      tagsRef.current.value,
      imageUrlRef.current.value,
      (event) => {
        console.log("Progress", Math.round((100 * event.loaded) / event.total));
      }
    );
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
          <TextField
            id="outlined-basic"
            label="Tags"
            variant="outlined"
            inputRef={tagsRef}
          />
          <TextField
            id="outlined-basic"
            label="Image URL"
            variant="outlined"
            inputRef={imageUrlRef}
          />
          {/* <div>Post Image upload: </div>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            ref={imageFileRef}
          ></input> */}
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}
