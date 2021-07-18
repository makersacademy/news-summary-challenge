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
}