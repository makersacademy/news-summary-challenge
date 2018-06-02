function newsListTests(){
  var newsList = new NewsList();

  assert.isTrue(
    "News List: an empty array of headlines: ",
    Array.isArray(newsList.get())
    );

  newsList.add("headlines", "imageURL")

  assert.isTrue(
    "News List: get news: ",
    newsList.getById(0).headline === "headlines"
  );

  assert.isTrue(
    "News List: get image: ",
    newsList.getById(0).image === "imageURL"
  );

}

newsListTests()
