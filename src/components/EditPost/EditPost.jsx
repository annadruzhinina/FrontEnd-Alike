//Import React
import React from "react";
import { useState, useEffect, useRef } from "react";
import { updatePost } from "../../services/postApi";
import UploadWidget from "../UploadWidget/UploadWidget.jsx";

//Import ccs
import "../Post/post.css";
import swal from "sweetalert";

function EditPost({ setShowPopup, setToggle, post }) {
  const [postData, setPostData] = useState(post);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true); // Add state variable for disabled state
  // Hook, we save there ref to our element
  const popupRef = useRef(null);

  const _setPostData = (_post) => {
    const cloudinaryUrl = window.localStorage.getItem("cloud");
    const urlTest = cloudinaryUrl || post.image;
    const shouldDisable =
      post.image === urlTest &&
      _post.project_name === post.project_name &&
      _post.github_link === post.github_link;

    setIsSaveDisabled(shouldDisable);
    setPostData({ ..._post, image: urlTest });
  };

  const handleUpdate = async () => {
    await updatePost(postData, post.id);

    // Removes cloudinaryUrl after submission of post update
    window.localStorage.removeItem("cloud");
    setToggle((prev) => !prev);
    handlePopupClose();
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      handlePopupClose();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      handlePopupClose();
    }
  };

  useEffect(() => {
    // добоваляем сулшателя в нашем случаи это  keydown
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      // удаляем сулшателя в нашем случаи это  keydown
      document.removeEventListener("keydown", handleKeyPress);
    };
    // [] массив зависимости, если пусто то этот useEffect будет вызван только один раз при начале рендеренга компоненты
  }, []);
  
  return (
    <div className="popup-container" onClick={handleClickOutside}>
      <div className="popup" ref={popupRef}>
        <div className="EditHeader">
          <h3>Edit Post</h3>
        </div>
        <form>
          <label htmlFor="project_name">Project Name:</label>
          <input
            type="text"
            name="project_name"
            value={postData.project_name}
            onChange={(e) => {
              // e.target.value.length > 0 &&
              if (e.target.value.length > 0 && e.target.value.length <= 30) {
                _setPostData({ ...postData, project_name: e.target.value });
              } else if (e.target.value.length > 30) {
                swal(
                  "Oops!",
                  "Please limit your input to 30 characters or less!",
                  "warning"
                );
                // alert("Please limit your input to 30 characters or less.");
              }
            }}
          />
          <label htmlFor="github_link">GitHub Link:</label>
          <input
            max={30}
            type="text"
            name="github_link"
            value={postData.github_link}
            onChange={(e) =>
              _setPostData({ ...postData, github_link: e.target.value })
            }
            required
          />
          <UploadWidget
            className="UploadWidget"
            onSelected={() => _setPostData(postData)}
          />
        </form>

        <div className="popup-btns">
          <button className="edit_btns" onClick={handlePopupClose}>
            Cancel
          </button>
          <button
            className="edit_btns"
            onClick={handleUpdate}
            disabled={isSaveDisabled}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
