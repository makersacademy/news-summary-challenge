
const articles = [];

function fetchNews() {
  fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let count = data.response.results.length;
      console.log(count);
      for (let i = 0; i < count; i++) {
        let newsData = data.response.results[i];
        let news = new News(newsData);
        console.log(news);
        articles.push(news);
        allNews();
      }

      console.log(articles);
    });
}

fetchNews();

function allNews() {
  let listDiv = document.getElementById('list');
  listDiv.innerText = ''; // clear area
  articles.forEach(function (article, index) {
    let newsItem = document.createElement('li');
    let headline = article.eachNewsHeadline(index);
    console.log(headline);
    console.log(1);
    newsItem.appendChild(headline);
    listDiv.appendChild(newsItem);
  });
}
