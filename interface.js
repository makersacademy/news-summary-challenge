let articles = []

function currentArticles() {
  let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body"
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // let total = data.response.results.length
      for (let i = 1; i < 10; i++) {
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
    let headline = article.getArticleHeadline(index);
    headlineItem.appendChild(headline);
    headlinesDiv.appendChild(headlineItem) // appendChild - add to end of note div

    let headlineImage = document.createElement('li');
    let image = article.getArticleImage();
    headlineImage.appendChild(image)
    headlinesDiv.appendChild(headlineImage)
  });
}

function loadContent() {
  let articleChoice = location.hash
  let indexAC = articleChoice.substr(1)
  console.log(indexAC)
  let headlinesDiv = document.getElementById('headlines-list') // set area on html page
  headlinesDiv.innerHTML = ''
  let article = articles[indexAC]
  article.getArticleText()
}
location.hash = null
currentArticles()


window.onhashchange = loadContent;
let homeButton = document.getElementById('home-button')
homeButton.addEventListener('click', function() {
  let headlinesDiv = document.getElementById('headlines-list') // set area on html page
  headlinesDiv.innerHTML = ''
  location.hash = null
  currentArticles()
})

// let articleUrl = "https://www.theguardian.com/us-news/2021/feb/21/malcolm-x-death-family-letter-nypd-fbi"
// let findSummary = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleUrl}`
// fetch(findSummary)
//   .then(response => response.json())
//   .then(data => {
//     document.getElementById("headlines-list").innerHTML = data.text;
//   })

// let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body"
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })


// function getArticleUrl(index, callback) {
//   let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest"
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       let articleUrl = data.response.results[index].webUrl
//       callback(articleUrl);
//     })
// }
// function getArticle(index) {
//   let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest"
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//     document.getElementById("article-headline").innerHTML = data.response.results[index].webTitle;
//     })
//     getArticleUrl(index, getArticleURL)
// } //close function
