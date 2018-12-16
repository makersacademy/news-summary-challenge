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
testjs.test('news article list view: renders list of news articles', function() {

  var newsArticleListView = new NewsArticleListView(["article1"]);

  var expectedResult = "<div> <ul> <li>article1</li> </ul> </div>"

  testjs.assertEquals(newsArticleListView.render(), expectedResult);

});

// news article view tests
testjs.test('news article view: renders article with heading and summary', function() {

  var newsArticleModel = {
    headline: function() {
      return 'news headline'
    },
    summary: function() {
      return 'news summary'
    }
  };

  var newsArticleView = new NewsArticleView();

  var expectedResult = "<div><h1>news headline</h1><p>news summary</p></div>";

  testjs.assertEquals(newsArticleView.render(newsArticleModel), expectedResult);

});

// news article model tests
testjs.test('a news article has a headline', function() {

  var apiResponse = JSON.stringify({ headline: 'headline', summary: 'summary'})
  console.log(apiResponse)
  var newsArticleModel = new NewsArticleModel(apiResponse);

  testjs.assertEquals(newsArticleModel.headline(), 'headline');
});

testjs.test('a news article has a headline', function() {

  var apiResponse = JSON.stringify({ headline: 'headline', summary: 'summary'})

  var newsArticleModel = new NewsArticleModel(apiResponse, apiResponse.summary);

  testjs.assertEquals(newsArticleModel.summary(), 'summary');
});
