// // Initialize a promise
// const promise = new Promise((resolve, reject) => {
//   resolve("We did it!");
// });
// console.log(promise);
//===============
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Resolving an asynchronous request!"), 2000);
// });

// // Log the result
// promise.then((response) => {
//   console.log(response);
// });
//========================
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Resolving an asynchronous request!"), 2000);
// });

// // Chain a promise
// promise
//   .then((firstResponse) => {
//     // Return a new value for the next then
//     return firstResponse + " And chaining!";
//   })
//   .then((secondResponse) => {
//     console.log(secondResponse);
//   });
//====================
// function getUsers(onSuccess) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Handle resolve and reject in the asynchronous API
//       if (onSuccess) {
//         resolve([
//           { id: 1, name: "Jerry" },
//           { id: 2, name: "Elaine" },
//           { id: 3, name: "George" },
//         ]);
//       } else {
//         reject("Failed to fetch data!");
//       }
//     }, 1000);
//   });
// }
// // Run the getUsers function with the false flag to trigger an error
// getUsers(true)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
//============================
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
