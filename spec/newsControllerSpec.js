'use strict';

(function() {
  var newsList = new NewsList;
  newsList.addArticle('I am the first article');
  var newsController = new NewsController(newsList);

  function testArticleAddition() {
    console.log('testArticleAddition');
    newsController.addArticle('I am added with delegation');
    expect(newsList.list[1].viewHeadline()).toEqual('I am added with delegation');
  }

  function testInnerHTML() {
    console.log('testInnerHTML');
    addAppDiv();
    newsController.displayHeadlines();

    expect(document.getElementById('app').innerHTML).toInclude('I am the first article');
  }

  function addAppDiv() {
    var mockedElement = document.createElement('div');
    mockedElement.id = 'app';
    document.getElementsByTagName('body').item(0).appendChild(mockedElement);
  }

  testArticleAddition();
  testInnerHTML();
})(this)
