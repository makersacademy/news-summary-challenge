'use strict';

const newsApiUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail&q=britney'
const britneyApiUrl = 'https://content.guardianapis.com/search?show-fields=thumbnail&q=britney%20spears&api-key=b6babb48-d9a6-4462-ac8f-19f3fc18b93e'
const summaryApiUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='
const webElement = document.getElementById("web")


let articleClass;
let articles;
let cleansedArticles;
let singleArticle;


async function getsNews() {
  const response = await fetch(britneyApiUrl).catch(() => {
    console.log('Error in fetching api data');
  });
  if (response) {
    const data = await response.json();
    cleanseJson(data.response.results);
  };
};


function cleanseJson(articles){
  cleansedArticles = articles.map((article) => {
    return {webPublicationDate: article.webPublicationDate, webTitle: article.webTitle, formattedWebTitle: article.webTitle, webUrl: article.webUrl, thumbnail: article.fields.thumbnail}
  });
  createClass(cleansedArticles);
};

  async function getsSummary(url, img, title) {
    let summaryResponse = await fetch(summaryApiUrl + url)
    let summaryData = await summaryResponse.json();
    let singleArticle = summaryData.text;
    webElement.innerHTML = `<div class ="singlecard"><a href="${url}" target="_blank"><h1>${title}</h1></a><br>${img}<br><br>${singleArticle}</div>`;
    window.scrollTo(0,0);
  }

 

function insertHTML(articleClass) {
  articleClass.articles.forEach((element) => {
    webElement.innerHTML += `<div class="card">${element.thumbnail}${element.formattedWebTitle}${element.webPublicationDate}</div>`;
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
  let img = articleClass.articles[index].thumbnail;
  let title = articleClass.articles[index].webTitle;
  getsSummary(url, img, title);
};

function createClass(cleansedArticles) {
  articleClass = new ArticleClass(cleansedArticles);
  articleClass.formatWithHtml();
  insertHTML(articleClass);
  hashChangeListener();
}

// getsNews()


