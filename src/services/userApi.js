import api from "./apiConfig";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Token ${localStorage.getItem("knox") || null}`);
  });
};

export const getUser = async () => {
  try {
    // let token = await getToken();

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: token,
    };

    const response = await api.get("profile", { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post("signup", userData);
    localStorage.setItem("knox", response.data["token"]);
    return response.data["token"];
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post("login", userData);
    console.log(response);
    localStorage.setItem("knox", response.data["token"]);
    return response.data["token"];
  } catch (error) {
    throw error;
  }
  // api
  //   .post("login", userData)
  //   .then((response) => {
  //     console.log("loginUser", response);
  //     localStorage.setItem("knox", response.data["token"]);
  //     return response.data["token"];
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     throw err;
  //   });
};

export const signOut = async () => {
  try {
    localStorage.removeItem("knox");
    return true;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    let token = await getToken();

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };

    const response = await api.get("user", { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};
