var myKey = config.MY_KEY; 
var url = "https://content.guardianapis.com/search?api-key=" + myKey;

function getNewsTitle() {
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((Json) => {
    console.log(Json)
    var headers = []
    Json.response.results.forEach(headline => {
      console.log(headline.webTitle)
      headers.push(headline.webTitle)
    });
    console.log(headers)
  })
};

var getapi = new getNewsTitle();
 
// console.log(getapi.response.json());