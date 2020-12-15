'use strict';

it('shows each article in the article list in the correct HTML format', function() {

  class Article {
      constructor(headline, thumbnail, summary, url) {
          this.headline = headline;
          this.thumbnail = thumbnail;
          this.url = url;
          this.summary = summary;
      }

      getHeadline() {
          return this.headline;
      }

      getThumbnail() {
          return this.thumbnail;
      }

      getURL() {
          return this.url;
      }

      getSummary() {
        return this.summary;
      }
  }

  class ArticleList {
    constructor() {
      this.article = []
    }

    getArticles() {
        return this.articles;
    }

    addArticle(article) {
      this.article.push(article);
    }
  }
  let myarticle = new Article('test headline', 'test thumbnail', 'test summary');
  let myarticleList = new ArticleList();
  myarticleList.addArticle(myarticle);
  let articleListView = new ArticleListView(myarticleList)
  expect(articleListView.getArticleList()).toEqual(myarticleList)
  expect(articleListView.renderArtListHtml()).toEqual("<ul><li><img src='test thumbnail'><br><p>'test headline'</p><br><p>'test summary'</p></li></ul>")
});
