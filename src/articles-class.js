'use strict';

class ArticleClass {
  constructor(articles = [{webPublicationDate: "2020-12-12T15:31:31Z", webTitle: "Britney", formattedWebTitle: "Britney", webUrl: "https://www.theguardian.com/politics/2020/dec/12/tories-criticise-boris-johnson-navy-gunboats-brexit-threat", thumbnail: "https://tinyurl.com/y3bn7cq6"}]) {
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
      element.thumbnail = `<img src="${element.thumbnail}" loading="lazy">`;
      element.webPublicationDate = `<p class="date">${element.webPublicationDate}</p>`;
      element.formattedWebTitle = `<h1><a href="#article/${index}">${element.webTitle}</a></h1>`;
    })
  }

}


