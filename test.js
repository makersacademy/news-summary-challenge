var makersDomain = "http://news-summary-api.herokuapp.com/";
var guardianAPIRequest = "guardian?apiRequestUrl=";
var url = "http://content.guardianapis.com/search?";
var allFields = "show-fields=all";

fetch(makersDomain + guardianAPIRequest + url + allFields)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Prints result from `response.json()` in getRequest
  })
  .catch((error) => console.error(error));
console.log(this.news);
