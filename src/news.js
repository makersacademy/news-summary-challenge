'use strict';

const newsApiUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail&q=britney'
const summaryApiUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='
const webElement = document.getElementById("web")


let articleClass;
let articles;
let cleansedArticles;
let singleArticle;

function getNews() {
  fetch(newsApiUrl)
  .then((resp) => resp.json())
  .then(function(data) {
    articles = data.response.results;
    cleansedArticles = articles.map((article) => {
      return {webPublicationDate: article.webPublicationDate, webTitle: article.webTitle, webUrl: article.webUrl, thumnail: article.fields.thumbnail}
    });
  })
  .catch(function(error) {
    console.log(error);
  })
}

function getSummary(url, img, title) {
  fetch(summaryApiUrl + url)
  .then((resp) => resp.json())
  .then(function(data) {
    singleArticle = data.text;
  })
  .catch(function(error) {
    console.log(error);
  })
  setTimeout(function(){
    webElement.innerHTML = `${title}<br>`;
    webElement.innerHTML += `<a href="${url}"> Click here for the full article </a>`
    webElement.innerHTML += img;
    webElement.innerHTML += singleArticle;
    }, 2000); 
  };



function insertHTML(articleClass) {
  articleClass.articles.forEach((element) => {
    webElement.innerHTML += element.thumnail;
    webElement.innerHTML += element.webTitle;
    webElement.innerHTML += element.webPublicationDate;
  })
}


function hashChangeListener(){
  window.addEventListener("hashchange", showSummaryForCurrentPage);
};

function showSummaryForCurrentPage(){
  viewSummary(getArticleIndexFromUrl(window.location));
};

function getArticleIndexFromUrl(location) {
  return location.hash.split("/")[1];
};

function viewSummary(index) {
  let url = articleClass.articles[index].webUrl;
  let img = articleClass.articles[index].thumnail;
  let title = articleClass.articles[index].webTitle;
  getSummary(url, img, title);
};

getNews();
setTimeout(function(){
  articleClass = new ArticleClass(cleansedArticles);
  articleClass.formatWithHtml();
  insertHTML(articleClass);
}, 1000);

setTimeout(function(){
  hashChangeListener();
}, 2000);


