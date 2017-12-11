// (function(exports) {
//   function testStoriesArticlesIsEmptyArray() {
//     var stories = new Stories();
//
//     if (stories.articles !== []) {
//       throw new Error("Articles is not an empty array");
//     } else {
//       console.log("Articles is an empty array; your test passed");
//     }
//   };
//
//   testStoriesArticlesIsEmptyArray();
// })(this);

(function(exports) {
  function storiesArticlesShouldBeTenLong() {
    var stories = new Stories();
    stories.addArticles();

    if (stories.articles.length != 10) {
      throw new Error("Not all articles were added");
    } else {
      console.log("All stories were added; your test passed")
    }
  };

  storiesArticlesShouldBeTenLong();
})(this);
