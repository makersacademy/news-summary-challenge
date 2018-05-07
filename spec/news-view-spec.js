function newsViewTests(){

  var newsView = new NewsView("news for news view test", "imgURL", "this is body text")

  assert.isTrue(
    "News View: display single news HTML",
    newsView.html() === "<div><img src='imgURL'></img><div>news for news view test</div><div>this is body text</div>"
  )

};

newsViewTests()
