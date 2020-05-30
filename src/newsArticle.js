class Article {

  constructor(headline) {
    this.headline = headline
    this.array = []
  }

  all(){
    return this.array;
  }

}
  // save into articles array 
  // .headline
  // .summary
  // .fullArticle
  // .link
  // .imgsrc

  

// save the variables
const ul = document.getElementById('articles');
//const url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body'
const guardianURL = 'https://content.guardianapis.com/search?api-key=19158819-ba32-4e1f-a54c-d75a65fad4ab'
// const url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=' + request + '?show-fields=body'
// const summarized = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + request


function createNode(element) {
  return document.createElement(element); // creates element
}
 
function append(parent, el) {
  return parent.appendChild(el); // adds element to parent 
}

fetch(guardianURL)
  .then((resp) => resp.json()) // change to json

  .then(function(data){
    var articles = data.response.results;
    return articles.map(function(article) {
      let li = createNode('li');
      let headline = createNode('span');
      let link = createNode('a');
      let summary = createNode('p');
      
      link.setAttribute("href", `${article.webUrl}`);
      link.innerHTML = `${article.webUrl}`;
      headline.innerHTML = `${article.webTitle}`;
      // img = createNote('img'); 
      // img.src = author.picture.medium;

      var articleApiUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + `${article.webUrl}`
      summary.innerHTML = getSummary(articleApiUrl);

      function getSummary(url) {
        fetch(url)
        .then(response => response.json()) // change into json
        .then(function getSentence(data){
          // var fullText = data.text 
          var sentence = data.sentences; // array
          console.log(sentence)
        });
      }
      
      append(li,headline);
      append(li,summary);
      append(li,link);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });

