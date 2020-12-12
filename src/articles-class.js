'use strict';

class ArticleClass {
  constructor(articles = [{webPublicationDate: "2020-12-12T15:31:31Z", webTitle: "Britney", webUrl: "https://www.theguardian.com/politics/2020/dec/12/tories-criticise-boris-johnson-navy-gunboats-brexit-threat", thumnail: "https://tinyurl.com/y3bn7cq6"}]) {
    this.articles = articles
  };

  viewArticles() {
    return this.articles;
  };

  formatDate() {
    this.articles.forEach((element) => {
     element.webPublicationDate = element.webPublicationDate.slice(0, 10);
    })
  };

  formatWithHtml() {
    this.formatDate();
    this.articles.forEach((element, index) => {
      element.webPublicationDate = `<div id =${index}><p>${element.webPublicationDate}</p>`;
      element.webTitle = `<h1><a href="#article/${index}">${element.webTitle}</a></h1>`;
      element.thumnail = `<img src="${element.thumnail}" loading="lazy"></div>`;
    })
  }

}


