function testDisplayView() {
  newsObject = {
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
    thumbnail: "thumbnail",
  };

  var list = new List();
  var view = new View(list);
  var storyDouble = new StoryDouble()
  function StoryDouble() {
    this.id = 1;
    this.title = "China";
    this.url = "url";
    this.thumbnail = "thumbnail";

    StoryDouble.prototype.getTitle = function(){
      return this.title;
    }
  }
  list.stories.push(storyDouble);
  assert.isTrue(view.displayHeadlines() === "<ul><li id=\"1\"><a href=\"#\" onclick=\"readStory(1)\">China</a></li></ul>"
, "List of headslines are displayed")
}

testDisplayView();
