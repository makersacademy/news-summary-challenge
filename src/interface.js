'use strict';

// const guardian = new Guardian();
const guardian = new MockGuardian();

document.addEventListener("DOMContentLoaded", () => {
  makeUrlChangeShowArticleForCurrentPage();
  showHeadlineLinks();
})

// Shows Article when a hash link is clicked, without refreshing.
const makeUrlChangeShowArticleForCurrentPage = () => {
  window.addEventListener("hashchange", showArticleForCurrentPage);
};

const showArticleForCurrentPage = () => {
  window.scrollTo(0,0);
  hideHeadlineLinks();
  showArticle(getApiUrlFromUrl(window.location));
  showBackButton();
}

const getApiUrlFromUrl = (location) => {
  let apiUrl = location.hash.split("#")[1];
  // remove https of the apiUrl and convert to http.
  let makersApiUrl = apiUrl.replace('https', 'http');
  return makersApiUrl;
}

const showArticle = (url) => {
  guardian.getArticleData(url).then(data => {
    let rendered = guardian.renderArticle(data);
    document.getElementsByClassName("article")[0].innerHTML = rendered;
  })

  guardian.getArticleSummaryData(url).then(data => {
    let renderedSummary = guardian.renderArticleSummary(data);
    document.getElementsByClassName("article-body")[0].innerHTML = renderedSummary;
  })
}

const removeArticle = () => {
  let articlePosition = document.getElementsByClassName("article")[0];
  articlePosition.innerHTML = "";
}

const createBackButton = () => {
  let backButtonElement = document.createElement('button');
  let backButtonTextNode = document.createTextNode("back");
  backButtonElement.appendChild(backButtonTextNode);
  backButtonElement.setAttribute('id', "back-button");
  backButtonElement.setAttribute('onclick', "event.preventDefault(); removeArticleAndShowHeadlines();");

  return backButtonElement;
}

const showBackButton = () => {
  let backButtonPosition = document.getElementsByClassName("back")[0];
  let backButtonElement = createBackButton();
  backButtonPosition.appendChild(backButtonElement);
}

const hideBackButton = () => {
  document.getElementsByClassName("back")[0].innerHTML = "";
}

const removeArticleAndShowHeadlines = () => {
  removeArticle();
  hideBackButton();
  showHeadlineLinks();
}

// HEADLINES //

const getHeadlines = () => {
  // calls the function that fetches the headlines and articles
  guardian.getHeadlinesData().then(data => setHeadlines(data.response.mostViewed));
}

const setHeadlines = (mostViewedData) => {
  for (let i = 0; i < 10; i++) {
    let webTitle = mostViewedData[i].webTitle;
    let apiUrl = mostViewedData[i].apiUrl;
    let thumbnail = mostViewedData[i].fields.thumbnail;
    
    // Need to render headlines here!
    createHeadlineElements(webTitle, apiUrl, thumbnail);
  }
}

// creates a HeadlineElement
const createHeadlineElements = (webTitle, apiUrl, thumbnail) => {
  let headlineElement = document.createElement('a');
  let headlineTextNode = document.createTextNode(webTitle);
  headlineElement.appendChild(headlineTextNode);
  headlineElement.setAttribute('href', `#${apiUrl}`);
  let imageElement = createHeadlineThumbnail(thumbnail);

  let headlinesPosition = document.getElementsByClassName("headlines")[0];
  headlinesPosition.appendChild(headlineElement);
  headlinesPosition.appendChild(imageElement);
  let lineBreak = document.createElement('br');
  headlinesPosition.appendChild(lineBreak);
}

const createHeadlineThumbnail = (thumbnail) => {
  let divElement = document.createElement('div');
  let imageElement = document.createElement('img');
  imageElement.setAttribute('src', `${thumbnail}`);
  divElement.setAttribute('class', 'headline-thumbnails');
  divElement.appendChild(imageElement);
  return divElement;
}

// Shows all Headline Links on page given headlines is an array of all the headlines. 
const showHeadlineLinks = () => {
  document.querySelector('.headlines-header').style.visibility = 'visible';
  getHeadlines();
}

const hideHeadlineLinks = () => {
  document.querySelector('.headlines-header').style.visibility = 'hidden';
  document.getElementsByClassName("headlines")[0].innerHTML = "";
}