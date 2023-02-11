// Import React
import { useEffect , useState , useContext } from 'react'

// Import CSS
import "./CreatePostModal.css";

//Build CreatePostModal Component
export default function CreatePostModal() {
    //Set useState object
    const [post, setPost] = useState({
        image: "",
        username: "",
        projTitle: "",
        github: ""
    });
    //WE WILL NEED TO IMPORT USERNAME TO SET IT
    const [image, setImage] = useState("")
    const [username, setUsername] = useState("")
    const [projTitle, setProjTitle] = useState("")
    const [github, setGithub] = useState("")
    //Handle Submit
    const handleSubmit = (e) => {
        //Console Log When Submitted
        console.log("Submitted")
        //Prevent Page from Reloading
        e.preventDefault()
        /*
        NOTE: WE WILL STILL NEED TO SEND THIS TO DB
        */       
        //Update Post with Values
        setPost({
            image,
            username,
            projTitle,
            github
        });
        //Reset Values to ''
        setImage('')
        setUsername('')
        setProjTitle('')
        setGithub('')
    }

    return (
        <>
            <div className='ModalPageContainer'>
                <div className='ModalFrame'>
                    <div className='Modal Content'>
                        <form className="form" onSubmit={handleSubmit}>
                            <input 
                                id="urlCPM"
                                type="url" 
                                placeholder="upload image"
                                value={image} 
                                onChange={(e)=> setImage(e.target.value)}
                            />
                            <input 
                                id="projTitleCPM"
                                type="text" 
                                placeholder="enter project title"
                                value={projTitle} 
                                onChange={(e)=> setProjTitle(e.target.value)}
                            />
                            <input 
                                id="githubCPM"
                                type="url" 
                                placeholder="enter github url"
                                value={github} 
                                onChange={(e)=> setGithub(e.target.value)}
                            />
                            <button
                                id="submitPost"
                                type="submit" 
                                value="submit">Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}