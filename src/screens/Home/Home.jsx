import "./home.css";
import { Link } from "react-router-dom";
import Post from "../../components/Post/Post.jsx";
import { useState } from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import RightNavbar from "../../components/RightNavbar/RightNavbar";
import CreatePostModal from "../../components/CreatePostModal/CreatePostModal.jsx";

// username, project, github, imageUrl
function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  

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
  return (
    <div className="home">
      <div className="home-header">
        <img
          className="home-headerImage"
          // src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          src="./image/logo_transparent_bg_new.png"
        />
      </div>
      <h1>Alike</h1>
      <div className="home-global">
        <div className="home-left">
          <Navbar />
        </div>
        <div className="home-center">
          {/* add id,post */}
          {posts.map((post) => {
            return (
              <Post
                // username, project, github, imageUrl
                username={post.username}
                project={post.project}
                github={post.github}
                imageUrl={post.imageUrl}
              />
            );
          })}
        </div>

        <div className="home-right">
          <RightNavbar />
        </div>
      </div>
      {modalOpen && <CreatePostModal onClose={() => setModalOpen(false)}/>}
    </div>
  );
}

export default Home;
