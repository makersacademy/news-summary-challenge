'use strict';

// const guardian = new Guardian();
const guardian = new MockGuardian();
let headlines;

document.addEventListener("DOMContentLoaded", () => {
  makeUrlChangeShowArticleForCurrentPage();
  getHeadlines();
  showHeadlineLinks();
})

// Shows Article when a hash link is clicked, without refreshing.
const makeUrlChangeShowArticleForCurrentPage = () => {
  window.addEventListener("hashchange", showArticleForCurrentPage);
};

const showArticleForCurrentPage = () => {
  hideHeadlineLinks();
  //test url for now
  let url = "http://content.guardianapis.com/100-teachers/2021/mar/26/sport-and-science-theyre-a-natural-match-for-this-creative-teacher";
  showArticle(url);

  showBackButton();
}

const showArticle = (url) => {
  // need to remove https of the apiUrl and convert to http.
  guardian.getArticleData(url).then(data => {
    let rendered = guardian.renderArticle(data);
    document.getElementsByClassName("article")[0].innerHTML = rendered;
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

  // makes a headlines array. 

  // dummy headlines
  headlines = ["apple", "banana", "carrot"];
}

// creates a HeadlineElement
const createHeadlineElement = (headline) => {
  let headlineElement = document.createElement('a');
  let headlineTextNode = document.createTextNode(headline);
  headlineElement.appendChild(headlineTextNode);
  headlineElement.setAttribute('href', `#${headline}`);

  return headlineElement;
}

// Shows all Headline Links on page given headlines is an array of all the headlines. 
const showHeadlineLinks = () => {
  document.querySelector('.headlines-header').style.visibility = 'visible';
  let headlinesPosition = document.getElementsByClassName("headlines")[0];
  for (let headline of headlines) {
    let headlineElement = createHeadlineElement(headline);
    headlinesPosition.appendChild(headlineElement);
    let lineBreak = document.createElement('br');
    headlinesPosition.appendChild(lineBreak);
  }
}

const hideHeadlineLinks = () => {
  document.querySelector('.headlines-header').style.visibility = 'hidden';
  document.getElementsByClassName("headlines")[0].innerHTML = "";
}