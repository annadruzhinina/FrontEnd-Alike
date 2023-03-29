import { useEffect, useRef, useState } from "react";
const UploadWidget = ({ onSelected }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dybw1p8nl",
        uploadPreset: "alike_crop",
        multiple: false,
        cropping: true,

        resource_type: "image",
      },
      function (error, result) {
        <result className="info url"></result>;
        let urlVal = result.info.url;
        let arr = Object.values(urlVal).join("");
        window.localStorage.setItem("cloud", arr);

        onSelected && onSelected();
      }
    );
  }, []);
  return (
    <button
      className="edit_UploadWidget"
      onClick={() => widgetRef.current.open()}
    >
      Upload Image
    </button>
  );
};

export default UploadWidget;
