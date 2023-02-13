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

          // CHANGE KEY TO MATCH VALUE NAME
          return {
            postID: post.id,
            image: post["image"],
            username: post["username"],
            projTitle: post["project_name"],
            github: post["github_link"],
          };
        });
        //Sets data
        setPostData(allPosts);
      });

  }, []);
  return postData;
}
