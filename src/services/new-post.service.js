import api from "./apiConfig";
// tags,
function newPostSubmit(projectName, githubUrl, image, onUploadProgress) {
  let formData = new FormData();

  formData.append("project_name", projectName);
  formData.append("github_link", githubUrl);
  // formData.append("tags", tags);
  formData.append("image", image);

  return api.post("/post", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
}

export default newPostSubmit;
