import { useEffect, useRef, useState } from "react";
import "./uploadwidget.css";

// export let url = ''

// export const urlFunc = () => {

// }

const UploadWidget = () => {

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dybw1p8nl",
        uploadPreset: "alike_preset",
      },
      function (error, result) {
        <result className="info url"></result>;
        // window.localStorage.setItem('cloudinary', toString(Object.values(result.info.url)[0]))
        let urlVal = result.info.url
        let arr = Object.values(urlVal).join('')
        window.localStorage.setItem('cloud', arr)
        console.log(result.info.url);
      }
    );
  }, []);
  return <button onClick={() => widgetRef.current.open()}>Upload Image</button>;
};

export default UploadWidget;
