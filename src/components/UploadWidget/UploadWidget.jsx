import { useEffect, useRef, useState } from "react";
const UploadWidget = ({ onSelected }) => {

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    let num = 450 / 350
    // initializes an instance of the Cloudinary widget
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
        // Cloudinary presets that disallow multiple uploades and allow for cropping
      {
        cloudName: "dybw1p8nl",
        uploadPreset: "alike_crop4",
        multiple: false,
        cropping: true,
        showSkipCropButton: false,
        croppingShowDimensions: true,
        croppingAspectRatio: num,
        resource_type: 'image'
      },
      // Event handler: call every time when we have any event
      // Documentation!!!!!! https://cloudinary.com/documentation/upload_widget_reference#events
      // If we have more then one image we will have problems
      function (error, result) {
        // <result className="info url"></result>; ?????????????!!!!!!
        if (result.event === "success") {
          const urlVal = result.info.url;
          const arr = Object.values(urlVal).join("");
          window.localStorage.setItem("cloud", arr);
          onSelected && onSelected();
        }
      }
    );
    // [] makes sure the widget only renders once
  }, []);
  return (
    <button
      className="edit_UploadWidget"
      onClick={(e) => {
        e.preventDefault();
        widgetRef.current.open();
      }}
    >
      Upload Image
    </button>
  );
};

export default UploadWidget;
