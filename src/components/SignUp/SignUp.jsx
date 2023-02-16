// Import React
import { useState } from "react";
// import css
import "./signup.css";
// Import React-Router-Dom
import { Navigate, useNavigate } from "react-router-dom";
// Import Context
import { useAuthContext } from "../../Hooks/useAuthContext.js";
// Import CSS
import "./signup.css";

// Sign-in function
function SignUp() {
  // Deconstruct useAuthContext to pull dispatch
  const { dispatch } = useAuthContext();

  // Set useState object
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    valid: "",
  });

  // Deconstruct useState
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [valid, setValid] = useState("");

  // Handle Submit
  const handleSubmit = (e) => {
    // Prevent Page from Reloading
    e.preventDefault();
    // Update User with Values
    setUser({
      username,
      password,
      passwordConfirm,
      valid:
        password === passwordConfirm ? (password !== "" ? true : "") : false,
    });
    // Sending payload (username)
    dispatch({ type: "LOGIN", payload: username });

    // Reset Values to ''
    setPassword("");
    setPasswordConfirm("");
    setValid(null);
  };
  // Password Validation Function
  const passwordValidation = (pw) => {
    // Variables for numbers and special characters
    const specialChar = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g;
    const numChar = /\d/;
    // Validate the password has the below criteria
    if (pw.length >= 8 && specialChar.test(pw) && numChar.test(pw)) return true;
    // If it does not, return false
    return false;
  };
  // Result Function to check for valid passwords
  const result = (validation) => {
    if (validation === "") {
      // Ensure reset of <p> when values are reset after submitting
      return <p></p>;
      // If the passwords match...
    } else if (validation === true) {
      // Vaidate if they meet the specified criteria and return <p> accordingly
      if (passwordValidation(user.password) === false) {
        return (
          <>
            <p>"Password Must Contain at least 8 letters"</p>
            <p>"Password Must Include a Number and Special Character"</p>
          </>
        );
      } else {
        return <Navigate to="/" replace={true} />;
      }
      // Otherwise flag that the passwords do not match
    } else {
      return (
        <div className="sign-up__password">
          Password incorrect please try again.
        </div>
      );
    }
  };

  let navigate = useNavigate();
  function handleBackClick() {
    let path = `/`;
    navigate(path);
  }

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
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              id="pw"
              type="password"
              placeholder="Password"
              value={password}
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{8,}"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              id="pwConfirm"
              type="password"
              placeholder="confirm password"
              value={passwordConfirm}
              onChange={(e) => {
                return setPasswordConfirm(e.target.value);
              }}
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
            <>{result(user.valid)}</>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
