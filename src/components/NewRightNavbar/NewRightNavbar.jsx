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
    <div className="NRNB">
      <h1>Tech News</h1>
      <ul>
        {newsData.articles ? (
          newsData.articles.map((item, index) => (
            <li key={index}>
              <img src={item["urlToImage"]} alt="articlePic" />
              <p>{item.title}</p>
              <a href={item.url}>Read More</a>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

export default NewRightNavbar;

// go to localhost:3000/newrightnavbar to edit this component
