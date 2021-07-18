'use strict';

class Guardian {
  getArticleData = (url) => {
    return fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=${url}?show-fields=body&show-fields=thumbnail`).then(response => {
      return response.json();
    })
  }

  renderArticle = (data) => {
    let articleHeadingHTML = `<h2 class="headline">${data.response.content.webTitle}</h2>`;
    let articleThumbnailHTML = `<div><img src="${data.response.content.fields.thumbnail}" /></div>`;
    let articleBodyPlaceholder = `<div class='article-body'></div>`;

    return `${articleHeadingHTML}${articleThumbnailHTML}${articleBodyPlaceholder}`;
  }

  getArticleSummaryData = (webUrl) => {
    return fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${webUrl}`).then(response => {
      return response.json();
    })
  }

  renderArticleSummary = (data) => {
    let articleBodyHTML = `<section><p class="article-text">${data.sentences.join(" ")}</p></section>`;

    return `${articleBodyHTML}`;
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