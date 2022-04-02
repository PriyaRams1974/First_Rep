import fetch from "node-fetch";
// Fetch a user from the GitHub API
// fetch("https://api.github.com/users/octocat")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data["node_id"]);
//     console.log(data.followers);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
//======================
// Create an async function
// async function getUser() {
//   return {};
// }
// console.log(getUser());
//=======================
// async function getUser() {
//   return {};
// }
// getUser().then((response) => console.log(response));
//======================
// Handle fetch with async/await
// async function getUser() {
//   const response = await fetch("https://api.github.com/users/octocat");
//   const data = await response.json();

//   console.log(data);
// }

// // Execute async function
// getUser();
//======================
// Handling success and errors with async/await
async function getUser() {
  try {
    // Handle success in try
    const response = await fetch("https://api.github.com/users/octocat");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    // Handle error in catch
    console.error(error);
  }
}
getUser();
