let news = new News();
const altImage = "/Users/kikidawson/Desktop/Projects/week-7/news-summary-challenge/images/blank.png"

function getNewsData() {
  return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail").then(response => {
    return response.json();
  })
}

getNewsData().then(news => {
  newsData = news.response.results
  saveAll(newsData)
});

function saveAll(articles) {
  articles.forEach(article => {
    let headline = article.webTitle
    let image = altImage
    if (article.fields)
      image = article.fields.thumbnail
    let story = "body"
    let newsArticle = new Article(headline, image, story)
    news.add(newsArticle)
  })
  displayAll()
}

function displayAll() {
  let articles = news.getArticles()
  articles.forEach(article => {
    document.getElementById("headlines").insertAdjacentHTML('beforeend', `<br>`);
    document.getElementById("headlines").insertAdjacentHTML('beforeend', `<img src=${article.getImageURL()}>`);
    document.getElementById("headlines").insertAdjacentHTML('beforeend', `<h3>${article.getHeadline()}</h3>`);
  })
}

var modal = document.getElementById("articleModal");
var btn = document.getElementById("selectArticle");
var span = document.getElementById("close");

btn.addEventListener('click', openModal, false)
span.addEventListener('click', closeModal, false)

function openModal() {
  modal.style.display = "block";
  document.getElementById("articleHeadline").innerHTML = newsData[0].webTitle
  document.getElementById("articleSummary").innerHTML = "summary"
}

function closeModal() {
  modal.style.display = "none";
}
