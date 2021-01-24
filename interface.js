function getNewsData() {
  return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?").then(response => {
    return response.json();
  })
}

function renderArticle(articleData) {
    let articleHeadlineHTML = `<h1>${articleData.webTitle}</h1>`;
    return `${articleHeadlineHTML}`;
}

function display(articles) {
  articles.forEach(article => {
    let rendered = renderArticle(article);
    document.getElementById("headlines").insertAdjacentHTML('beforeend', rendered);
  })
}

getNewsData().then(news => {
  console.log(news)
  let newsData = news.response.results
  display(newsData)
});
