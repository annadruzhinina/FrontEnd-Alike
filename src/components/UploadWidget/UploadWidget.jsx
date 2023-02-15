import { useEffect, useRef } from 'react';


const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dybw1p8nl',
            uploadPreset: 'alike_preset'
        }, function(error, result){
            console.log(result);
        });
    }, [])
    return (
        <button onClick={() => widgetRef.current.open()}>
            Upload Image
        </button>
    )


}

export default UploadWidget;