// Import React
import React, { useState } from "react";
// Import css
import "./signup.css";
// Import React-Router-Dom
import { Navigate, useNavigate } from "react-router-dom";
// Import CSS
import "./signup.css";
import { getUser, registerUser } from "../../services/userApi";

// Sign-in function
function SignUp({ setUser, user }) {
  const [error, setError] = useState("");
  let navigate = useNavigate();
  // Set useState object
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
    valid: false,
  });
  // console.log("Test3", userData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password === ""){
      setError('Please Enter a valid username and password')
      // return <p>Please Enter a valid username and password</p>
    }
      // setUser({ message: "Please Enter a valid username and password" });
    else if (userData.password === userData.re_password) {
      // setUserData((prev) => ({
      //   ...prev,
      //   valid: true,
      // }));
      // await registerUser(userData);

      // let response = await getUser();
      // setUser(response);
      // console.log("Test4", userData);
      // window.localStorage.setItem("username", userData.username);
      // navigate("/home");
    } else {
      // setUser((prev) => ({
      //   ...prev,
      //   message: "Confirm password must be the same as password",
      // }));
      // return <p>Confirm password must be the same as password</p>


      
      setError('Confirm password must be the same as password')
    }
  };
  // Password Validation Function
  const passwordValidation = (pw) => {
    // Variables for numbers and special characters
    const specialChar = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g;
    const numChar = /\d/;
    // Validate the password has the below criteria
    if (pw.length >= 6 && specialChar.test(pw) && numChar.test(pw)) return true;
    // If it does not, return false
    return false;
  };
  // Result Function to check for valid passwords
  const result = (validation) => {
    console.log(validation)
    if (validation === "") {
      // Ensure reset of <p> when values are reset after submitting
      return <p></p>;
      // If the passwords match...
    } else if (validation === true) {
      // Vaidate if they meet the specified criteria and return <p> accordingly
      if (passwordValidation(userData.password) === false) {
        return (
          <>
            <p>"Password Must Contain at least 6 letters"</p>
            <p>"Password Must Include a Number and Special Character"</p>
          </>
        );
      } else {
        setUser(null)
        return <Navigate to="/sign-up" replace={true} />;
      }
      // Otherwise flag that the passwords do not match
    } else {
      console.log(user)
      let message = ""
      if(userData.username !== "" && userData.email !==  "" && userData.password !== ""){
        if(userData.password === userData.re_password){
          message = 'Passwords Match'
        }else{
          message = error
        }
        message = error
      }
      // return (
      //   <div className="sign-up__password">
      //   {message}
      //   </div>
      // );
    }
  };

  function handleBackClick() {
    let path = `/`;
    navigate(path);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="landing-home-header">
        <img
          className="landing-home-header-image"
          // src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          src="./image/logo.png"
        />
        <span>Alike</span>
      </div>
      <div className="landing">
        <div className="landig-content">
          <h2 className="landing-title">
            Social Me​dia Is Better When You Can Relate{" "}
          </h2>
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="SigninLogo">Sign Up</h1>
            <input
              className="username"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={userData.username}
              onChange={handleChange}
            />
            <input
              className="email"
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              id="pw"
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              minLength="6"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{8,}"
              onChange={handleChange}
            />
            <input
              id="pwConfirm"
              type="password"
              name="re_password"
              placeholder="Confirm Password"
              value={userData.re_password}
              onChange={handleChange}
            />
            <button
              onClick={handleBackClick}
              id="submitCredential"
              type="submit"
              value="submit"
            >
              Back
            </button>

            <button id="submitCredentials" type="submit" value="submit">
              Submit
            </button>
            <>{result(userData.valid)}</>
            <div className="sign-up__password">{error}</div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
