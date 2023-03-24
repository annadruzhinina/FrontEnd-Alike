//Import React
import React from "react";
import { useState, useEffect, useRef } from "react";
import { updatePost } from "../../services/postApi";
import UploadWidget from "../UploadWidget/UploadWidget.jsx";
//Import ccs
import "../Post/post.css";

function EditPost( {showPopup, setShowPopup, setToggle, post}) {
    const [postData, setPostData] = useState(post);
    let cloudinaryUrl = window.localStorage.getItem("cloud")
    const [cloudURL, setCloudURL] = useState(cloudinaryUrl);
    const popupRef = useRef(null);
    const handleUpdate = async () => {
        console.log(post)
        cloudinaryUrl = window.localStorage.getItem("cloud")
        await updatePost({
            project_name: postData.project_name,
            github_link: postData.github_link,
            image: cloudinaryUrl,
        }, post.id);
        console.log(postData)
        setToggle((prev) => !prev);
        setShowPopup(false);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        setPostData(post);
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

    const updateURL = (prevURL, newURL) => {
        if (prevURL !== newURL) {
            setPostData({ ...postData, image: newURL })
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

  return (
    <div className="popup-container">
        <div className="popup">
        <div className="EditHeader">
            <h3>Edit Post</h3>
            <button className="ExitEdit"
                onClick={() => {
                handlePopupClose();
                console.log("Popup closed");
                }}
            >
                X
            </button>
        </div>
        <label htmlFor="project_name">Project Name:</label>
        <input
            type="text"
            name="project_name"
            value={postData.project_name}
            onChange={(e) =>
            setPostData({ ...postData, project_name: e.target.value })
            }
        />
        <label htmlFor="github_link">GitHub Link:</label>
        <input
            type="text"
            name="github_link"
            value={postData.github_link}
            onChange={(e) =>
            setPostData({ ...postData, github_link: e.target.value })
            }
        />
        <UploadWidget 
            className="UploadWidget"
            value={cloudinaryUrl}
            onChange={(e) =>
                updateURL(cloudURL, cloudinaryUrl)
            }
        />
        <div className="popup-btns">
        <button onClick={handleUpdate}>Save</button>
        </div>
        </div>
    </div>
  )
}

export default EditPost