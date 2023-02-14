import { useState, useEffect } from "react";

export default function useUserData() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // INSERT API LINK
    fetch(`https://backend-alike.herokuapp.com/user/`)
      .then((res) => res.json())
      .then((data) => {
        //Maps the data with the new object and data
        let allUsers = data.map((user) => {
          //Returns object with data

          return {
            id: user.id,
            username: user["username"],
            email: user["email"]
          };
        });
        //Sets data
        setUserData(allUsers);
      });

  }, []);
  return userData;
}
