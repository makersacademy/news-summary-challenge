function testListModel(){
  newsObject = {
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
    fields: {thumbnail: "thumbnailURL"}
  };

  var story = new Story(newsObject)
  var list = new List(Story);
  assert.isTrue(list instanceof List, "List model instantiated");
}

testListModel();

function testAddStory() {
  newsObject = {
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
    fields: {thumbnail: "thumbnailURL"}
  };
  var list = new List();
  list.addStory(newsObject);
  assert.isTrue(list.stories.length === 1, "A story was added to the list")
}
testAddStory();

function testFindStoryByID() {
  newsObject2 = {
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
    fields: {thumbnail: "thumbnailURL"}
  };
  var list = new List();
  list.addStory(newsObject2);
  assert.isTrue(list.findStoryById(2).title === "test article", "Find story by ID")

}

testFindStoryByID()
