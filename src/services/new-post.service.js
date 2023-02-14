import api from "./apiConfig";

export const createPost = async (postData) => {
  // console.log(postData);
  //   let formData = {
  // project_name : postData.project_name,
  // github_link : postData.github_link,
  // image : postData.image
  //   }

  // console.log(formData)
  let formData = {
      username : 2,
      project_name: postData.project_name,
      github_link: postData.github_link,
      image: postData.image
  }
  console.log(formData)

  try {
    const response = await api.post("post/", {
      username : 2,
      project_name: postData.project_name,
      github_link: postData.github_link,
      image: postData.image,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

//   console.log(formData)

//   return api.post("post", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//     onUploadProgress,
//   });
// }

export default createPost;
