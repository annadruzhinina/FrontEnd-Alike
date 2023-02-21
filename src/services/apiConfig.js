//Import axios
import axios from "axios";
// Set API Variable
let apiUrl;
// Set URL link
const apiUrls = {
  // Need to change later on real link
  production: "https://protected-hollows-02997.herokuapp.com/https://backend-alike.herokuapp.com/",
  development: "https://protected-hollows-02997.herokuapp.com/https://backend-alike.herokuapp.com/",
};
// Determine if production or deployment
if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}
// Use Axios
const api = axios.create({
  baseURL: apiUrl,
});
// Export API
export default api;
