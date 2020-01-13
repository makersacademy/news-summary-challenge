function ArticleModelToDisplayTitle(){
  var articleModel = new ArticleModel("News title");
  console.log(articleModel.displayTitle())
  assert.isTrue(articleModel.displayTitle() === "News title");
};

ArticleModelToDisplayTitle();