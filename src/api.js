var today = new Date();
var year = today.getFullYear();
// this returns October for some reason
var month = today.getMonth() + 1;
var date = today.getDate();

// API call to get news for a specific date with own API key - this can be done through Makers API
const headlinesApi = 'https://content.guardianapis.com/search?q=politics&show-fields=thumbnail&from-date=' + `${year}-${month}-${date}` + '&api-key=9f99d01f-95dd-48f7-ae13-b120d25884bb'
// API call to get a specific article including its body with own API key - this can be done through Makers API
const fullArticleApi = "https://content.guardianapis.com/culture/2018/nov/18/tristram-hunt-museums-v-and-a-interview-fake-news-labour?show-blocks=all&api-key=9f99d01f-95dd-48f7-ae13-b120d25884bb"
// API call to get article summary through Makers Aylien API
const summaryApi = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html"
// I cannot find documentation on using fetch with Aylien.

function getHeadlines() {
  fetch(headlinesApi)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
     return json['response']['results'];
  })
  .then(function(result) {
    result.forEach(function(each) {
      // title
      console.log(each['webTitle']);
      // image link
      console.log(each['fields']['thumbnail']);
      // console.log(each['apiUrl']);
    })
  })
}

// getHeadlines();

function getFullArticle() {
  fetch(fullArticleApi)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    return json['response']['content'];
  })
  .then(function(result) {
    // title and body
    console.log(result['webTitle']);
    console.log(result['blocks']['body'][0]['bodyTextSummary']);
  })
}
//
// getFullArticle();

function getSummary() {
  fetch(summaryApi)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
  })
}
