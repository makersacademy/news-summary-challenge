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
    // console.log(articles)
    //  create and append to li's

    return articles.map(function(article) {

      console.log(article.webTitle)
      let li = createNode('li');
      let span = createNote('span');
      // img = createNote('img'); 
      // img.src = author.picture.medium;
      span.innerHTML = `${article.webTitle}`;
      append(li,span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });



  // "id": "football/live/2020/may/29/freiburg-v-bayer-leverkusen-bundesliga-live-updates",
  // "type": "liveblog",
  // "sectionId": "football",
  // "sectionName": "Football",
  // "webPublicationDate": "2020-05-29T20:24:34Z",
  // "webTitle": "Freiburg v Bayer Leverkusen: Bundesliga – live updates!",
  // "webUrl": "https://www.theguardian.com/football/live/2020/may/29/freiburg-v-bayer-leverkusen-bundesliga-live-updates",
  // "apiUrl": "https://content.guardianapis.com/football/live/2020/may/29/freiburg-v-bayer-leverkusen-bundesliga-live-updates",
  // "isHosted": false,
  // "pillarId": "pillar/sport",
  // "pillarName": "Sport"