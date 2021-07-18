'use strict';

class Guardian {
  getArticleData = (url) => {
    return fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=${url}?show-fields=body`).then(response => {
      return response.json();
    })
  }

  renderArticle = (data) => {
    let articleHeadingHTML = `<h2 class="headline">${data.response.content.webTitle}</h2>`;
    let articleBodyHTML = `<section><p class="article-text">${data.response.content.fields.body}</p></section>`;

    return `${articleHeadingHTML}${articleBodyHTML}`;
  }

  getArticleSummary = (webUrl) => {
    return fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${webUrl}`).then(response => {
      return response.json();
    })
  }

  renderArticleSummary = (data) => {
    let articleHeadingHTML = "No header yet"
    let articleBodyHTML = `<section><p class="article-text">${data.sentences}</p></section>`;

    return `${articleHeadingHTML}${articleBodyHTML}`;
  }

  getHeadlinesData = () => {
    return fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-most-viewed=true&page-size=10&show-fields=thumbnail`).then(response => {
      return response.json();
    })
  }

  renderHeadlines = (data) => {
    let articleHeadingHTML = `<h2 class="headline">${data.response.content.webTitle}</h2>`;
    let articleBodyHTML = `<section><p class="article-text">${data.response.content.fields.body}</p></section>`;

    return `${articleHeadingHTML}${articleBodyHTML}`;
  }

}