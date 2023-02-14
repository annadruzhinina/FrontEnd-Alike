// Import react
import { createContext, useReducer } from "react";
import axios from "axios";
// Export context

// if you need to point to production.
const BASE_URL = "http://localhost:8000"
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





export const AuthContext = createContext();
// Set switch state function for Login and Logout - will set user "payload" upon login
export const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return (
          { user: action.payload }
          )          ;
      case "LOGOUT":
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
