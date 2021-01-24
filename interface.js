let news = new News();
const altImage = "/Users/kikidawson/Desktop/Projects/week-7/news-summary-challenge/images/blank.png"

function getNewsData() {
  return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all").then(response => {
    return response.json();
  })
}

getNewsData().then(news => {
  let newsData = news.response.results
  saveAll(newsData)
});

function saveAll(articles) {
  articles.forEach(article => {
    let headline = article.webTitle
    let image = altImage
    let story = "No story available"
    let url = article.webUrl
    if (article.fields)
      image = article.fields.thumbnail
      story = article.fields.body
    let newsArticle = new Article(headline, image, story, url)
    news.add(newsArticle)
  })
  displayAll()
}

function displayAll() {
  let articles = news.getArticles()
  articles.forEach((article, index) => {
    let headlinesDiv = document.getElementById("headlines")
    let headlineDiv = document.createElement('div')
    headlineDiv.insertAdjacentHTML('beforeend', `<img src=${article.getImageURL()}>`)
    headlineDiv.insertAdjacentHTML('beforeend', `<h3><a href=#${index}>${article.getHeadline()}</a></h3>`)
    headlinesDiv.appendChild(headlineDiv)
  })
}

var modal = document.getElementById("articleModal");
var span = document.getElementById("close");

span.addEventListener('click', closeModal, false)
window.addEventListener('hashchange', openModal, false)

function openModal() {
  modal.style.display = "block";
  let articles = news.getArticles()
  let index = location.href.split('#')[1]
  let selectedArticle = articles[index]
  let selectedArticleDiv = document.getElementById("selectedArticle")
  console.log(selectedArticle)
  selectedArticleDiv.insertAdjacentHTML('beforeend', `<h1><a href='${selectedArticle.getArticleURL()}'>${selectedArticle.getHeadline()}</a></h1>`)
  selectedArticleDiv.insertAdjacentHTML('beforeend', `${selectedArticle.getStory()}`)
}

function closeModal() {
  modal.style.display = "none";
  // reset to no hash?
}
