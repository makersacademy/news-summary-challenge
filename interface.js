let articles = []

function currentArticles() {
  let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body"
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let total = data.response.results.length
      for (let i = 0; i < total; i++) {
      let articleData = data.response.results[i]
      let article = new Article(articleData)
      articles.push(article)
      allArticles()
      }
    })
}

function allArticles() {
  let headlinesDiv = document.getElementById('headlines-list') // set area on html page
  headlinesDiv.innerText = '' // clear area
  articles.forEach(function(article, index) { // each instance of note in notes array
    let headlineItem = document.createElement('li');
    let headline = article.newHeadlineElement(index);
    let image = article.createArticleImage();
    console.log(headline)
    console.log(1)
    // console.log(image)
    headlineItem.appendChild(headline);
    headlinesDiv.appendChild(headlineItem) // appendChild - add to end of note div
  });
}

currentArticles()

let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body"
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })

function getArticle(index) {
  let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest"
  fetch(url)
    .then(response => response.json())
    .then(data => {
    document.getElementById("article-headline").innerHTML = data.response.results[index].webTitle;
    })
    getArticleUrl(index, getArticleText)
} //close function

function getArticleUrl(index, callback) {
  let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest"
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let articleUrl = data.response.results[index].webUrl
      callback(articleUrl);
    })
}

function getArticleText(url) {
  let findSummary = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}`
  fetch(findSummary)
    .then(response => response.json())
    .then(data => {
      document.getElementById("article-text").innerHTML = data.text;
    })
}
