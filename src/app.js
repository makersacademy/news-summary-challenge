
let articles = [];

function fetchNews() {
  fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let count = data.response.results.length;
      for (let i = 0; i < count; i++) {
        let newsData = data.response.results[i];
        let news = new News(newsData);
        articles.push(news);
        allNews();
      }
    });
}

function allNews() {
  let listDiv = document.getElementById('list');
  listDiv.innerText = '';
  articles.forEach(function (article, index) {
    let newsItem = document.createElement('li');
    let headline = article.eachNewsHeadline(index);
    let headlineImage = article.createImage();
    newsItem.appendChild(headline);
    newsItem.appendChild(headlineImage);
    listDiv.appendChild(newsItem);
  });
}

fetchNews();
window.addEventListener('hashchange', displayNewsArticle);

function displayNewsArticle() {
  index = location.hash.substr(1);
  let news = (articles[index]);
  news.articleLink();
}
