function newsModelTests(){
  var news= new News(1, "This is testing headline", "imageURL");

  assert.isTrue(
    "News-model: stores id",
    news.get().id === 1
  );

  assert.isTrue(
    "News-model: stores headline",
    news.get().headline === "This is testing headline"
  );

  assert.isTrue(
    "News-model: stores imageURL",
    news.get().image === "imageURL"
  );

}

newsModelTests()
