"use strict"

const newsFeed = document.getElementById("news-feed")

function updateHeadlines() {
  if(newsFeed) {
    clearNewsFeed()
    articles.forEach((article, index) => {
      let articleDiv = newArticleDiv(index)
      let headlineDiv = newHeadlineDiv(index)
      let headlineText = newHeadlineText(article.headline)
      let thumbnailImg = newThumbnail(article.thumbnail)
      headlineDiv.appendChild(headlineText)
      articleDiv.appendChild(headlineDiv)
      articleDiv.appendChild(thumbnailImg)
      newsFeed.appendChild(articleDiv)
    })
  }
}

function clearNewsFeed() {
  while(newsFeed.lastChild.id !== "news-feed-heading") {
    newsFeed.removeChild(newsFeed.lastChild)
  }
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

function newThumbnail(thumbnailAddress) {
  let thumbnailImg = document.createElement('img')
  thumbnailImg.src = thumbnailAddress
  return thumbnailImg
}

if(newsFeed) { getLatestArticles() }
