'use strict';

describe('Article Class', () => {

  

    it('articleClass is an instance of ArticleClass', () => {
      let articleClass = new ArticleClass();
      expect(articleClass instanceof ArticleClass).toBeTrue();
    });
  
    it('Takes in a JS object upon initiation', () => {
      let fakeArticleData = [{webPublicationDate: "Default", webTitle: "Default", formattedWebTitle: "Default", webUrl: "Default", thumbnail: "Default"}];
      let articleClass = new ArticleClass(fakeArticleData);
      expect(articleClass.viewArticles()).toEqual(fakeArticleData)
    });

    it('formats the date of the article', () => {
      let fakeArticleData = [{webPublicationDate: "Default", webTitle: "Default", formattedWebTitle: "Default", webUrl: "Default", thumbnail: "Default"}];
      let articleClass = new ArticleClass(fakeArticleData);
      articleClass.formatDate();
      expect(articleClass.viewArticles()[0].webPublicationDate).toEqual("2020-07-29")
    });

    it('Formats the articles object with html tags', () => {
      let fakeArticleData = [{webPublicationDate: "Default", webTitle: "Default", formattedWebTitle: "Default", webUrl: "Default", thumbnail: "Default"}];
      let articleClass = new ArticleClass(fakeArticleData);
      articleClass.formatWithHtml();
      expect(articleClass.viewArticles()[0].webPublicationDate).toEqual(`<div id =0><p>Default</p>`);
    });

    it('Formats the article title to a clickable link, to #article/i', () => {
      let fakeArticleData = [{webPublicationDate: "Default", webTitle: "Default", formattedWebTitle: "Default", webUrl: "Default", thumbnail: "Default"}];
      let articleClass = new ArticleClass(fakeArticleData);
      articleClass.formatWithHtml();
      expect(articleClass.viewArticles()[0].webTitle).toEqual(`<h1><a href="#article/0">Default</a></h1>`)
    });


  });


// formatWithHtml() {
//     this.formatDate();
//     this.articles.forEach((element) => {
//       element.webPublicationDate = `<p>${element.webPublicationDate}</p>`;
//       element.webTitle = `<h1>${element.webTitle}</h1>`;
//       element.thumbnail = `<img src="${element.thumbnail}">`;
//     });
