var today = new Date();
var year = today.getFullYear();
// this returns October for some reason
var month = today.getMonth() + 1;
var date = today.getDate();


// API call to get news for a specific date with own API key
const headlines_url = 'https://content.guardianapis.com/search?q=news&from-date=' + `${year}-${month}-${date}` + '&api-key=9f99d01f-95dd-48f7-ae13-b120d25884bb'
// API call to get a specific article including its body with own API key
const article_url = "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=9f99d01f-95dd-48f7-ae13-b120d25884bb"

fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(json) {
  return json['response']['results'];
})
.then(function(result) {
  result.forEach(function(each) {
    console.log(each['apiUrl']);
  })
})


// take API url from this, and then run the other api to get full text of the article
// fetch(url)
// .then(function(response) {
//   return response.json();
// })
// .then(function(json) {
//   return json['response']['results'];
// })
// .then(function(result) {
//   console.log(result);
//   console.log(result[0]['apiUrl']);
// })


// returns an array of objects
// fetch(url)
// .then(function(response) {
//   return response.json();
// })
// .then(function(json) {
//   return console.log(json['response']['results'])
// })
