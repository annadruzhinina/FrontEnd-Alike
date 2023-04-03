import { useEffect, useState, React } from "react";
import axios from "axios";
import HackerRank from './HackerRank.png';
import HackerEarth from './hackerEarth.png';
import TopCoder from './topCoder.png';
import LeetCode from './leetCode.jpg';
import Toph from './Toph.png';
import CodeChef from'./codeChef.jpg';
import CodeForces from './codeForces.png';
import AtCoder from './atCoder.png';
import CsAcademy from './csAcademy.png';
// the apiKey: 40ae771bf4ab4646b2d0c3916a06e6dd
import "./newrightnavbar.css";

function NewRightNavbar() {
  // useState for storing data retreived from fetch call
  const [newsData, setNewsData] = useState([]);

  // Function fetching news data from api
  async function getNews() {
    try {
      const response = await axios.get(
        "https://kontests.net/api/v1/all"
      );
      console.log(response.data);
      setNewsData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function getImage(title){
    console.log(title);

    let url = {
      "HackerRank": HackerRank,
      "CodeChef": CodeChef,
      "TopCoder": TopCoder,
      "LeetCode": LeetCode,
      "Toph": Toph,
      "HackerEarth": HackerEarth,
      "CodeForces": CodeForces,
      "AtCoder": AtCoder,
      "CSAcademy": CsAcademy
    }
    
    return <img src={url[title]}></img>
  }


  // useEffect for fetching news data on page load.
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="newNavR">
      <h3>Hackathons</h3>
      <div className="newNavR--scroll">
        <div className="newNavR--list">
          {newsData ? (
            newsData
            .filter((item) => {
              if(item.site === "HackerRank" || 
              item.site === "LeetCode" ||
              item.site === "CodeChef" ||
              item.site === "AtCoder" ||
              item.site === "TopCoder" ||
              item.site === "HackerEarth" ||
              item.site === "Toph" ||
              item.site === "CSAcademy" ||
              item.site === "CodeForces"){
                return true;
              }
              return false;
            })
            .map((item, index) => (
              <a href={item.url} key={index} target="_blank">
                <div className="NavR--article">
                    <div className="imgBackground">
                      {getImage(item.site)}
                    </div>
                    <p>{item.name}</p>
                </div>
              </a>

            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewRightNavbar;

// go to localhost:3000/newrightnavbar to edit this component