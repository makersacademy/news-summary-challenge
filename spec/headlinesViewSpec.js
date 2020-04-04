'use strict';

(function(exports) {
  var newsList = new NewsList;
  newsList.addArticle('Headline One');
  var headlinesView = new HeadlinesView(newsList);

  function displayHeadlinesInApp() {
    console.log('displayHeadlinesInApp');

    expect(headlinesView.displayHeadlines()).toEqual('<ul><li><div><a href="#articles/0">Headline One</a></div></li></ul>');
  }

  displayHeadlinesInApp();
})(this);
