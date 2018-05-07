function newsViewTests(){

  var news = new News(0, "news for news view test", "imgURL")

  var newsView = new NewsView(news)

  assert.isTrue(
    "News View: display single news HTML",
    newsView.html() === "<div><img src='imgURL'></img><div>news for news view test</div>"
  )

};

newsViewTests()
