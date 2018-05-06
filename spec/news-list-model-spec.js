function newsListTests(){
  var newsList = new NewsList();

  assert.isTrue(
    "News List: an empty array of headlines: ",
    Array.isArray(newsList.get())
    );

  newsList.add("headlines", "imageURL")

  assert.isTrue(
    "News List: get news: ",
    newsList.getNewsById(0) === "headlines"
  );

  assert.isTrue(
    "News List: get image: ",
    newsList.getImageById(0) === "imageURL"
  );

}

newsListTests()
