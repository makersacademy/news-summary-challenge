(() => {
  // index.js
  var fetchGardiansApi = () => {
    fetch("https://content.guardianapis.com/search?page=1&api-key=test&show-fields=headlines").then((response) => response.json()).then((data) => {
      console.log("Success:", data);
    }).catch((error) => {
      console.error("Error:", error);
    });
  };
  fetchGardiansApi();
})();
