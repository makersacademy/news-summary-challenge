(function(exports) {
  function storiesArticlesShouldBeTenLong() {
    var stories = new Stories();
    var guardianHeadlinesApi = 'https://content.guardianapis.com/search?api-key=';

    stories.getHeadlines(guardianHeadlinesApi, apiKey(), false);

    if (stories.articles.length !== 10) {
      console.log(stories.articles);
      throw new Error("Not all articles were added");
    } else {
      console.log("All stories were added; your test passed")
    }
  };

  storiesArticlesShouldBeTenLong();
})(this);
