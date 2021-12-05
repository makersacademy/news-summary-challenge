const fetchGardiansApi = (callback) => {
  fetch(
    "https://content.guardianapis.com/search?page=1&api-key=test&show-fields=headline,thumbnail,body"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      callback(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

module.exports = fetchGardiansApi;
