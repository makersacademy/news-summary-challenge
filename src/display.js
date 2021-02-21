"use strict"

const newsFeed = document.getElementById("news-feed")

function updateHeadlines() {
  articles.forEach((article, index) => {
    let articleDiv = newArticleDiv(index)
    let headlineDiv = newHeadlineDiv(index)
    let headlineText = newHeadlineText(article.headline)
    headlineDiv.appendChild(headlineText)
    articleDiv.appendChild(headlineDiv)
    newsFeed.appendChild(articleDiv)
  })
}

function newArticleDiv(index) {
  let articleDiv = document.createElement('div')
  articleDiv.id = `article-${index}`
  articleDiv.className = "article"
  return articleDiv
}

function newHeadlineDiv(index) {
  let headlineDiv = document.createElement('div')
  headlineDiv.id = `headline-${index}`
  headlineDiv.className = "headline"
  return headlineDiv
}

function newHeadlineText(headline) {
  let headlineText = document.createElement('h3')
  headlineText.innerText = headline
  return headlineText
}

getLatestArticles()
