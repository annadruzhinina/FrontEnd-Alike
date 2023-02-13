import React, { useState, useEffect } from "react";
import "./home.css";
import Post from "../../components/Post/Post.jsx";
import Navbar from "../../components/Navbar/Navbar";
import RightNavbar from "../../components/RightNavbar/RightNavbar";
import CreatePostModal from "../../components/CreatePostModal/CreatePostModal.jsx";
import usePostData from "../../Hooks/usePostData.js";

// username, project, github, imageUrl
function Home() {
  const postData = usePostData()
  console.log(postData)


  const [posts, setPosts] = useState([
    {
      username: "Anna",
      project: "Alike",
      github: "https://github.com/annadruzhinina/FrontEnd-Alike",
      imageUrl: "../image/project_001.png",
    },
    {
      username: "Masha",
      caption:
        "llama, (Lama glama), domesticated livestock species, descendant of the guanaco (Lama guanicoe), and one of the South American members of the camel family, Camelidae (order Artiodactyla). The llama is primarily a pack animal, but it is also used as a source of food, wool, hides, tallow for candles, and dried dung for fuel. Llama herds are found primarily in Bolivia, Peru, Colombia, Ecuador, Chile, and Argentina, and they have been exported to other countries.",
      imageUrl:
        "https://t3.ftcdn.net/jpg/02/94/01/90/240_F_294019074_G4NcIwP8uaYyxX0lNflmwMNK7N67LawS.jpg",
    },
    {
      username: "Irina",
      caption: "❤️❤️❤️",
      imageUrl:
        "https://t4.ftcdn.net/jpg/03/05/40/57/240_F_305405752_HDjCBMszsIz7OhJ2ybT0TeIh3If5CREJ.jpg",
    },
    {
      username: "Liza",
      caption:
        "Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLorem ",
      imageUrl:
        "https://t4.ftcdn.net/jpg/00/28/04/57/240_F_28045761_hAsTs9W6HZs1RiRiND8QdNoD70paO6Ww.jpg",
    },
  ]);


// }
// function Home() {
//   const [posts, setPosts] = useState([]);

  // data from json file
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // checking if a post has been liked, here we avoid on multi clicks
  function handlePostLikeClick(updatedPost) {
    console.log("Handle Post Update", updatedPost);
    const newPosts = posts.map((post) => {
      if (post.id === updatedPost.id) return updatedPost;
      return post;
    });
    setPosts(newPosts);
  }

  function handlePostLikeClick(updatedPost) {
    console.log("Handle Post Update", updatedPost);
    const newPosts = posts.map((post) => {
      if (post.id === updatedPost.id) return updatedPost;
      return post;
    });
    setPosts(newPosts);
  }

  return (
    <div className="home">
      <div className="home-global">
        <Navbar />
        <div className="home-content">
          <div className="home-content_center">
            <div className="home-center">
              {posts.map((post, index) => {
                // console.log(post);
                return (
                  <Post
                    key={index}
                    post={post}
                    onPostLikeClick={handlePostLikeClick}
                  />
                );
              })}
            </div>
            <RightNavbar />
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <h1>hello</h1>
      </footer>
    </div>
  );
}

export default Home;
