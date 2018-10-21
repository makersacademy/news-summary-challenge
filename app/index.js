// const Guardian = require('guardian-js');
// const api = new Guardian('afe232e7-c432-4f7e-bfb0-08242d4645c8', false);
//
// api.sections.search('world')
//   .then(function(response){
//     console.log(response.body);
//   })
//   .catch(function(err){
//     console.log(err);
//   });

var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = () => {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      articles = JSON.parse(httpRequest.responseText).response.results;
      console.log(articles);
      listArticles(articles);
    }
  }
};

var headlineList = document.getElementById("headlines")

var listArticles = articles => articles.forEach(article => {
  var headline = document.createElement('li');
  headline.textContent = article.webTitle;
  headlineList.append(headline);

  headline.addEventListener("click", () => {

    // headline.textContent = article.summarize({
    //   sentences_number: 5
    httpRequest.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?" + article.webUrl + "&sentences_number=5");
    httpRequest.send();
    // }, function(error, response) {
    //   if (error === null) {
    //       response.sentences.forEach(function(s) {
    //         console.log(s);
    //   })
    // }
  })
});

httpRequest.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?api-key=afe232e7-c432-4f7e-bfb0-08242d4645c8");
httpRequest.send();
