// Typical get request response in response.js
let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail&page-size=3";

// Used for testing and development
async function fetchAsync() {
  return response;
}

// Uncomment to run a real get request and comment above function.
/*
async function fetchAsync () {
  // await response of fetch call
  let response = await fetch(url);
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}
*/

// trigger async function
// log response or catch error of fetch promise
fetchAsync()
  .then(function(data) {
    console.log(data.response.results[0])
    let element = document.getElementById("newsContent");
    var listItem = "";
    data.response.results.forEach(news => {
      listItem += `<h1>${news.webTitle}</h1> <br> <img src=${news.fields.thumbnail}> <br>`;
    });
    element.innerHTML = listItem; 
  })
  .catch(reason => console.log(reason.message))


