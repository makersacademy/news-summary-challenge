let articles = []

function newsApiRequest(api, url) {
  return fetch(`http://news-summary-api.herokuapp.com/${api}?apiRequestUrl=${url}`)   
  .then((response) => { 
      return response.json().then((data) => {
          return data
      }).catch((err) => {
          console.log(err);
      }) 
  });
}

function todaysNews() {
  var todaysDate = new Date().toISOString().substr(0, 10);
  return newsApiRequest('guardian', 'http://content.guardianapis.com/search?from-date=' + todaysDate)
}

function isolateApiUrls(todaysResponse) {
  todaysResponse.response.results.forEach(result => {
    articles.push({ title: result.webTitle, url: result.webUrl })
  })
}

function aylienArticles() {
  articles.forEach((article, index) => {
    newsApiRequest('aylien', `https://api.aylien.com/api/v1/summarize?url=${article.url}`).then((data) => {
    article["summary"] = data.text
    })
  })
}

function prepArticlesJson(callback1, callback2) {
todaysNews().then((data) => {
  jsonData = data;
  callback1(jsonData);
  callback2();
});
}

prepArticlesJson(isolateApiUrls, aylienArticles);

