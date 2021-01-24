function getNewsData() {
  return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail").then(response => {
    return response.json();
  })
}

function renderArticle(articleData, index) {
  let articleHeadlineHTML = `<h3>${articleData.webTitle}</h3>`;
  let articleThumbnail = `<img src='${articleData.fields.thumbnail}'>`
  return {
    "headline": `${articleHeadlineHTML}`,
    "thumbnail": `${articleThumbnail}`
  };
}

function display(articles) {
  articles.forEach((article, index) => {
    let rendered = renderArticle(article, index);
    document.getElementById("headlines").insertAdjacentHTML('beforeend', `<br>`);
    document.getElementById("headlines").insertAdjacentHTML('beforeend', rendered.thumbnail);
    document.getElementById("headlines").insertAdjacentHTML('beforeend', rendered.headline);
  })
}

getNewsData().then(news => {
  let newsData = news.response.results
  display(newsData)
});
