'use strict';
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
  // Remove Headlines from DOM Tree

  // showArticle(getArticle()) 
}

const showArticle = () => {
  let articlePosition = document.getElementsByClassName("article")[0];

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
  let headlinesPosition = document.getElementsByClassName("headlines")[0];
  for (let headline of headlines) {
    let headlineElement = createHeadlineElement(headline);
    headlinesPosition.appendChild(headlineElement);
    let lineBreak = document.createElement('br');
    headlinesPosition.appendChild(lineBreak);
  }
}