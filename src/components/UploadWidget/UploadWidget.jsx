import { useEffect, useRef } from "react";

function UploadWidget() {

// creates a reference for widget and cloudinary
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    // initializes an instance of the Cloudinary widget
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
        // Cloudinary presets that disallow multiple uploades and allow for cropping
      {
        cloudName: "dybw1p8nl",
        uploadPreset: "alike_crop",
        multiple: false,
        cropping: true,
        resource_type: 'image'
      },
      // Cloudinary's result is a URL to an img in their API that will have the presets applied to the image, in this case file compression.
      function (error, result) {
        <result className="info url"></result>;
        // stores the result array in a variable
        let urlVal = result.info.url
        // the result was giving each character of the URL its own index in the array, so here we join all characters of the array to create a functional URL
        let arr = Object.values(urlVal).join('')
        // here we store this URL in local storage so that we have access to it in the widget's parent component
        window.localStorage.setItem('cloud', arr)

        console.log(result.info.url);
      }
    );
    // [] makes sure the widget only renders once
  }, []);
  // widget appears when the user clicks a button
  return <button onClick={() => widgetRef.current.open()}>Upload Image</button>;
};

export default UploadWidget;
