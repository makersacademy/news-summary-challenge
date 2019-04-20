'use strict';
var ArticleList = require('../src/articleList');

var { describe, it, expect } = require('../services/testing-framework');

let article = {
  id: '1',
  text: 'Article',
  image: 'Image',
  getText: () => {
    return this.text;
  },
  getImage: () => {
    return this.image;
  },
  getId: () => {
    return this.id;
  }
};

describe('Article List', function() {
  it('creates an article instance', function() {
    let articleList = new ArticleList();
    expect(articleList).toBeInstanceof(ArticleList);
  });

  it('adds an article to the list', function() {
    let articleList = new ArticleList();
    articleList.addArticle(article);
    expect(articleList.list).toHaveLength(1);
  });

  it('retrieves an article from the list', function() {
    let articleList = new ArticleList();
    articleList.addArticle(article);
    let articleId = article.getId();
    expect(articleList.getArticle(articleId)).toEqual(article);
  });

  it('retrieves all articles from the list', function() {
    let articleList = new ArticleList();
    articleList.addArticle(article);
    articleList.addArticle(article);
    expect(articleList.getArticles()).toHaveLength(2);
  });
});
