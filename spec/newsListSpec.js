'use strict';

(function(exports) {
  var newsList = new NewsList();

  function createArticleInNewsListWithHeading() {
    console.log('createArticleInNewsListWithHeading');
    newsList.addArticle('I am a headline');
    expect(newsList.list[0].viewHeadline()).toEqual('I am a headline');
  }

  function createArticleInNewsListWithUniqueID() {
    console.log('createArticleInNewsListWithUniqueID');
    newsList.addArticle('I am the first article');
    newsList.addArticle('I am the second article');
    expect(newsList.list[0].id).toEqual(0);
    expect(newsList.list[1].id).toEqual(1);
  }

  function viewAllArticlesInList() {
    console.log('viewAllArticlesInList');
    newsList.addArticle('I am a headline');
    expect(newsList.viewList()[0]).toBe(new NewsArticle);
  }

  createArticleInNewsListWithHeading();
  createArticleInNewsListWithUniqueID();
  viewAllArticlesInList();
})(this)
