(function getHeadlines() {
    newsStories = testData;
    let newsfeed = new NewsFeed;
    let headlines = newsfeed.getHeadlines();
    check('Headlines are returned from API data', () => {
        assert.include(headlines, "Saudi Arabia pays UK firms millions to boost image");
    })
})();
