fetch("https://content.guardianapis.com/search?api-key=64a5abc0-c1dc-431b-9bb4-3a9114917ee1")
.then(response => {
  return response.json();
}).then(data => {
  console.log(data);
}).catch(err => {
  console.log("API Error: Guardian")
});

// fetch("edf8ebfc00d5b0a8c68f0a47f8decffe")
// .then(response => {
//   return response.json();
// }).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log("API Error: News Summary")
// });
