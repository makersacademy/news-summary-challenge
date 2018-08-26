'use strict';

describe('NewsList', function() {
  it('shows a list of news stories', function() {
    var newsList = new NewsList();
    newsList.addToList("headline", "date", "url", "content")
    // newsList.addToList();
    expect(newsList._newsStories[0].headline()).toBe("headline")
    // expect(newsList._newsStories[0].content()).toBe("content")
  })
})



// (function(exports) {
//   function testSaveFunction() {
//     articlelist = new ArticleList;
//     articlelist.save("headline", "content", "url", "date")
//     assert.isTrue(articlelist._articles[0].headline() === "headline")
//   };
//    testSaveFunction();
// })(this);
