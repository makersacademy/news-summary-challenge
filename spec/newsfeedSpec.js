'use strict';


var testjs = new TestJS();

// controller tests
// testjs.test('controller renders HTML', function() {
//
//   var newsArticleList = {};
//
//   var newsArticleListView = {
//     render: function(html) {
//       return 'news article list view';
//     }
//   };
//
//   var NewsArticleView = {};
//   var element = {}
//   var controller = new Controller(newsArticleList, newsArticleListView, NewsArticleView);
//
//   var html = newsArticleListView.render();
//   testjs.assertEquals(controller.render(element, html), 'news article list view');
//
// });

// news article list view tests
testjs.test('news article list view: renders list of news headlines', function() {

  var newsArticleModel = {
    headline: function() {
      return 'headline'
    },
    summary: function() {
      return 'summary'
    },
  }

  var newsArticleListModel = {
    list: [newsArticleModel]
  };

  var newsArticleListView = new NewsArticleListView(newsArticleListModel);

  var expectedResult = "<div> <ul> <a ref='#'>headline</a> </ul> </div>"

  testjs.assertEquals(newsArticleListView.render(), expectedResult);

});

// news article view tests
testjs.test('news article view: renders article with heading and summary', function() {

  var newsArticleModel = {
    headline: function() {
      return 'headline'
    },
    summary: function() {
      return 'summary'
    }
  }

  var newsArticleView = new NewsArticleView(newsArticleModel);

  var expectedResult = "<div><h1>headline</h1><p>summary</p></div>";

  testjs.assertEquals(newsArticleView.render(), expectedResult);

});

// news article model tests
testjs.test('a news article has a headline', function() {

  var apiResponse = JSON.stringify({ headline: 'headline', summary: 'summary'})

  var newsArticleModel = new NewsArticleModel(apiResponse);

  testjs.assertEquals(newsArticleModel.headline(), 'headline');
});

testjs.test('a news article has a headline', function() {

  var apiResponse = JSON.stringify({ headline: 'headline', summary: 'summary'})

  var newsArticleModel = new NewsArticleModel(apiResponse, apiResponse.summary);

  testjs.assertEquals(newsArticleModel.summary(), 'summary');
});
