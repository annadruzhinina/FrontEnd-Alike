import { useEffect, useState, React } from "react";
import axios from "axios";
// the apiKey: 40ae771bf4ab4646b2d0c3916a06e6dd

function NewRightNavbar() {
  // useState for storing data retreived from fetch call
  const [newsData, setNewsData] = useState({});

  // Function fetching news data from api
  async function getNews() {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=40ae771bf4ab4646b2d0c3916a06e6dd"
      );
      //   console.log(response);
      setNewsData(response);
      console.log(newsData);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect for fetching news data on page load.
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <p></p>
    </div>
  );
}

export default NewRightNavbar;
