import { useEffect, useState, React } from "react";
import axios from "axios";
// the apiKey: 40ae771bf4ab4646b2d0c3916a06e6dd
import "./newrightnavbar.css";

function NewRightNavbar() {
  // useState for storing data retreived from fetch call
  const [newsData, setNewsData] = useState([]);

  // Function fetching news data from api
  async function getNews() {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=40ae771bf4ab4646b2d0c3916a06e6dd"
      );
      setNewsData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect for fetching news data on page load.
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="newNavR">
      <h3>Tech News</h3>
      <div className="newNavR--scroll">
        <div className="newNavR--list">
          {newsData.articles ? (
            newsData.articles.map((item, index) => (
              <a href={item.url} target="_blank">
              <div key={index} className="NavR--article">
                <div className="imgBackground">
                    <img src={item["urlToImage"]} alt="articlePic" />
                </div>
                <p>{item.title}</p>
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