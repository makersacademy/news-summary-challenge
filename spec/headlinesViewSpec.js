'use strict';

(function() {
  var newsList = new NewsList;
  newsList.addArticle('I am the first article');
  var headlinesView = new HeadlinesView(newsList);

  function displayHeadlinesInApp() {
    console.log('displayHeadlinesInApp');
    expect(headlinesView.displayHeadlines()).toEqual('<ul><li><div><a href="#articles/0">I am the first article</a></div></li></ul>');
  }

  displayHeadlinesInApp();
})(this);
