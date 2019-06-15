describe("News List View", function() {
  var newsList = new NewsStoryList();
  var newsListView = new NewsListView(newsList)

  it("takes a news story list upon initializing", function() {
    assert(newsListView._newsList, newsList)
  });

  it("returns a sting of HTML containing the list", function(){
    var newsStory1 = new NewsStory("Headline1", "Story Text2")
    var newsStory2 = new NewsStory("Headline2", "Story Text2")
    newsList.addStory(newsStory1);
    newsList.addStory(newsStory2);
    console.log(newsList.viewAll());
    assert(newsListView.view(), "<div class=\"container\"><h3>Headline</h3></div>");
  });




});
