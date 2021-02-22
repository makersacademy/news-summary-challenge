
const articles = [];

window.addEventListener('hashchange', displayNewsArticle);
document.addEventListener('DOMContentLoaded', fetchNews);
// fetchNews();

function fetchNews() {
  location.hash = 'WELCOME WELCOME PLEASE COME IN';
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
    newsItem.appendChild(headline);
    listDiv.appendChild(newsItem);

    let image = document.createElement('li');
    let headlineImage = article.createImage();
    image.appendChild(headlineImage);
    listDiv.appendChild(image);
  });
}

function displayNewsArticle() {
  document.getElementById('list').innerText = '';
  index = location.hash.substr(1);
  let news = (articles[index]);
  news.articleSummary();
  news.headline();
  news.headlineLink();
}
