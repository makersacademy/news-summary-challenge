
describe('ARTICLE CONTROLLER - renders the text string to the page', function(){
  var articleController = new ArticleController()
  articleController.renderHTML('<ul><li><div><a href="#testurl1">testtitle1</a></div></li></ul>')
  return assert.isTrue(document.getElementById('newsfeed').innerHTML === '<ul><li><div><a href="#testurl1">testtitle1</a></div></li></ul>')
});

// TESTS BELOW HERE ARE USING SAME VARIABLE + ON TIME DELAY

// var allNews = new AllNews()
// allNews.makeRequest("http://127.0.0.1:8080/testdata.html", allNews.putInElementsRenderHTML)
// setTimeout(function() {
//   describe('ARTICLE CONTROLLER - checks that data is downloaded from the API', function(){
//     return assert.isTrue(allNews._data instanceof Array)
//   });
//
//   describe('ARTICLE CONTROLLER - returns a specific article when passed the relevant id', function() {
//     var id = "football/live/2017/dec/09/tottenham-v-stoke-real-madrid-v-sevilla-and-more-clockwatch-live"
//     return assert.isTrue(allNews.returnArticleWithSameId(id) === allNews._data[0])
//   });
// }, 5000);
