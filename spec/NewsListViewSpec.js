describe("News List View", function() {
  var newsList = new NewsStoryList();
  var newsListView = new NewsListView(newsList)

  it("takes a news story list upon initializing", function() {
    assert(newsListView._newsList, newsList)
  });

  it("returns a sting of HTML containing the list", function() {
    var newsStory1 = new NewsStory("Headline1", "Story Text1")
    var newsStory2 = new NewsStory("Headline2", "Story Text2")
    newsList.addStory(newsStory1);
    newsList.addStory(newsStory2);
    // console.log(newsList._stories);
    // console.log(newsList._stories[0]._headline);
    console.log(newsListView.view());
    assert(newsListView.view(), "<div class=\"container\"><h3>Headline1</h3></div>");
  });
});
