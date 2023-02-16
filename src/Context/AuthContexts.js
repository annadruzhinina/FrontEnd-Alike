// Import react
import { createContext, useReducer } from "react";
import axios from "axios";
// Export context

// if you need to point to production.
const BASE_URL = "https://backend-alike.herokuapp.com/"
const ACCESS_TOKEN = 'access_token'
const REFRESH_TOKEN = 'refresh_token'

// NEED TOKEN REQUEST
let tokenRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json'
  }
})

// NEED LOGIN TOKEN
const loginUser = (username, password) => {
  const loginBody = {username: username, password: password}
  console.log(loginBody)

  return tokenRequest.post(`api/token/`, loginBody)
    .then((response)=> {

      window.localStorage.setItem(ACCESS_TOKEN, response.data.access);
      window.localStorage.setItem(REFRESH_TOKEN, response.data.refresh);

      return Promise.resolve(response.data);
    }).catch((error)=>{
      return Promise.reject(error);
    });
}

// NEED REFRESH TOKEN
const refreshToken = () => {
  const refreshBody = {"refresh": window.localStorage.getItem(REFRESH_TOKEN)}
  return tokenRequest.post(`api/token/refresh/`, refreshBody)
    .then((response)=> {
      window.localStorage.setItem(ACCESS_TOKEN, response.data.access);
      return Promise.resolve(response.data);
    }).catch((error)=>{
      return Promise.reject(error);
    });
}

const isCorrectRefreshError = (status) => {
  return status === 401;
}

const authRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Authorization': `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`,
    'Content-Type': 'application/json',
  }
});

authRequest.interceptors.response.use(
(response) => response, // this is for all successful requests.
(error) => { //handle the request
  return errorInterceptor(error)
}
);

const errorInterceptor = (error) => {
  const originalRequest = error.config;
  const status = error.response.status;
  if (isCorrectRefreshError(status)) {
    return refreshToken().then((data)=> {
      const headerAuthorization = `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`;
      authRequest.defaults.headers['Authorization'] = headerAuthorization;
      originalRequest.headers['Authorization'] = headerAuthorization;
      return authRequest(originalRequest)
    }).catch((error)=> {
      // if token refresh fails, logout the user to avoid potential security risks.

      //NOTE: FIX THE LOGOUT USER
      logoutUser();
      return Promise.reject(error)
    })
  }
  return Promise.reject(error)
}

//NEED LOGOUT FUNCTION
const logoutUser = () => {
  window.localStorage.removeItem(ACCESS_TOKEN);
  window.localStorage.removeItem(REFRESH_TOKEN);
  window.localStorage.removeItem('username');
  authRequest.defaults.headers['Authorization'] = "";
}

export const AuthContext = createContext();
// Set switch state function for Login and Logout - will set user "payload" upon login
export const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        window.localStorage.setItem('username', action.payload.username);
        loginUser(action.payload.username, action.payload.password)
        return (
          { user: action.payload }
          )          ;
      case "LOGOUT":
        logoutUser()

        return (
          { username: null, password: null }
          );
      default:
        return state;
    }
  };
  // Set functions to create the provider for the parent to wrap all underling components
  export const AuthContextProvider = ({ children }) => {
    // Sets and initializes the default state of the authReducer function to null
    const [state, dispatch] = useReducer(authReducer, {
      username: null,
      password: null
    });
    console.log("AuthCon state", state);
    // Returning provider, wrapping around parent div and allows it to use state and dispatch methods
    return (
      <AuthContext.Provider value={{ ...state, dispatch }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export { tokenRequest, loginUser, logoutUser, refreshToken, authRequest,
    errorInterceptor, BASE_URL, ACCESS_TOKEN, REFRESH_TOKEN }
