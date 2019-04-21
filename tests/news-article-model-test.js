(function(exports){
  function HasAHeadline(){
    var article = new NewsArticle("headline", "summary", "link");
    assert.isTrue("each news article has a headline", article.headline() === "headline")
  };

  HasAHeadline();

  function HasASummary(){
    var article = new NewsArticle("headline", "summary", "link");
    assert.isTrue("each news article has content", article.summary() === "summary")
  };

  HasASummary();

  function HasALink(){
    var article = new NewsArticle("headline", "summary", "link");
    assert.isTrue("each news article has a link to the original article", article.link() === "link")
  };

  HasALink();
})(this);
