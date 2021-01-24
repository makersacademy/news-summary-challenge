function getNewsData() {
  return fetch("https://content.guardianapis.com/search?api-key=0c0a4894-5a0d-4538-b222-c1b5e62e629b").then(response => {
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
  let newsData = news.response.results
  display(newsData)
});
