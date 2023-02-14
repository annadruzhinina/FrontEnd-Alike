import { useState, useEffect } from "react";

export default function usePostData() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    // INSERT API LINK
    fetch(`https://backend-alike.herokuapp.com/post/`)
      .then((res) => res.json())
      .then((data) => {
        //Maps the data with the new object and data
        let allPosts = data.map((post) => {
          //Returns object with data

          return {
            id: post.id,
            image: post["image"],
            username: post["username"],
            project_name: post["project_name"],
            github_link: post["github_link"],
          };
        });
        //Sets data
        setPostData(allPosts);
      });

  }, []);
  return postData;
}

