// Typical get request response in response.js
let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail&page-size=3";

// hash listner on window
hashListner();

// get request for news stories
getNews();

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

// Save news response array in outer scope
let newsArray;

// trigger async function
// log response or catch error of fetch promise
function getNews() {
  fetchAsync()
  .then(function(data) {
    newsArray = data.response.results;
    let element = document.getElementById("newsContent");
    var listItem = "";
    data.response.results.forEach((news, index) => {
      listItem += `<img src=${news.fields.thumbnail}><br>
      <h1> 
        <a href=#${index}>
          ${news.webTitle}
        </a>
      </h1><br>`;
    });
    element.innerHTML = listItem; 
    // reset hash without setting off a hashchange
    history.replaceState(null, null, document.location.pathname);
  })
  .catch(reason => console.log(reason.message))
}



function hashListner() {
  window.addEventListener("hashchange", getNote);
}

function getNote() {
  var index = window.location.hash.split("#")[1];
  let body = document.getElementById("newsContent")
  let news = newsArray[index];
  
  fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${news.webUrl}`)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    body.innerHTML += "<br>" + data.sentences.join("<br>");
    document.getElementById("return").addEventListener("click", getNews);
  }).catch(function() {
    console.log("Booo");
  });

  // async function fetchAsync () {
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log(data);
  //   return data;
  // }

  body.innerHTML = `<img src=${news.fields.thumbnail}><br>
  <h1> ${news.webTitle}</h1><br> 
  <button id=return>Return to main page</button> 
  <a href=${news.webUrl}> 
    View the full story
  </a>`;
}