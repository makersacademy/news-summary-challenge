function visitAArticleTest(){

  it('See the whole article', function() {
    clickLink("Lindsey Vonn Fires Back at Twitter Trolls After Not Winning Medal in First 2018 Olympics Race");
    articleUrl1 = "http://www.eonline.com/news/914699/lindsey-vonn-fires-back-at-twitter-trolls-after-not-winning-medal-in-first-2018-olympics-race";
    Article.articleUrl = articleUrl1;
    clickLink("Warning after Swiss avalanche hits skiers");
    articleUrl2 = "http://www.bbc.com/news/world-europe-43104323";
    Article.articleUrl = articleUrl2;

    setTimeout(function() {
      assert.hasContent('notebody', 'Warning after Swiss avalanche hits skiers');
      assert.doesntHaveContent('notebody', 'Lindsey Vonn Fires Back at Twitter Trolls After Not Winning Medal in First 2018 Olympics Race');
    }, 1000)
  });
}
}
