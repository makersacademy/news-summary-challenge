(function (){
  headline = new NewsHeadlineModel("imageUrl", "A shocking headline", "id/url/headline")
  assert.isTrue(headline.id === "id/url/headline", "a headline is created with correct initialisation")
})()