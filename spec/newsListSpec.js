'use strict';

(function() {
  var newsList = new NewsList();
  newsList.addArticle('I am the first article');
  newsList.addArticle('I am the second article');

  function createArticleInNewsListWithHeading() {
    console.log('createArticleInNewsListWithHeading');
    expect(newsList.list[0].viewHeadline()).toEqual('I am the first article');
  }

  function createArticleInNewsListWithUniqueID() {
    console.log('createArticleInNewsListWithUniqueID');
    expect(newsList.list[0].id).toEqual(0);
    expect(newsList.list[1].id).toEqual(1);
  }

  function viewAllArticlesInList() {
    console.log('viewAllArticlesInList');
    expect(newsList.viewList()[0]).toBe(new NewsArticle);
  }

  createArticleInNewsListWithHeading();
  createArticleInNewsListWithUniqueID();
  viewAllArticlesInList();
})(this)
