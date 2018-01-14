function testStoryModel(){
  newsObject = {
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
    fields: {thumbnail: "thumbnailURL"}
  };

  var story = new Story(newsObject);
  assert.isTrue(story instanceof Story, "Story model instantiated");
}

testStoryModel();

function testImage(){
  newsObject = {
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
    fields: {thumbnail: "thumbnailURL"}
  };

  var story = new Story(newsObject);
  assert.isTrue(story.image === newsObject.fields.thumbnail, "Story displays the image");
}

testImage();

function testUrl(){
  newsObject = {
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
    fields: {thumbnail: "thumbnailURL"}
  };

  var story = new Story(newsObject);
  assert.isTrue(story.url === newsObject.webUrl, "Story displays the web url");
}

testUrl();

function testTitle(){
  newsObject = {
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
    fields: {thumbnail: "thumbnailURL"}
  };

  var story = new Story(newsObject);
  assert.isTrue(story.title === newsObject.webTitle, "Story displays the title");
}

testTitle();
