import { useEffect, React } from "react";
import axios from "axios";
// the apiKey: 40ae771bf4ab4646b2d0c3916a06e6dd

function NewRightNavbar() {
  async function getNews() {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=40ae771bf4ab4646b2d0c3916a06e6dd"
      );
    } catch {}
  }

  return <div>New Right Navbar</div>;
}

export default NewRightNavbar;
