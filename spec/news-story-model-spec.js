function testHeadline(){
  newsObject = {
    id: "media/2018/jan/14/new-tabloid-observer-coming-next-week",
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
    fields: {thumbnail: "thumbnailURL",
            body: "hello"}
  };

  var story = new Story(newsObject);
  assert.isTrue(story.getHeadLine() === newsObject.webTitle, "Story displays the headline");
}

testHeadline();

function testImage(){
  newsObject = {
    id: "media/2018/jan/14/new-tabloid-observer-coming-next-week",
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
    fields: {thumbnail: "thumbnailURL",
            body: "hello"}
  };

  var story = new Story(newsObject);
  assert.isTrue(story.getImage() === newsObject.fields.thumbnail, "Story displays the image");
}

testImage();

function testWebUrl(){
  newsObject = {
    id: "media/2018/jan/14/new-tabloid-observer-coming-next-week",
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
    fields: {thumbnail: "thumbnailURL",
            body: "hello"}
  };

  var story = new Story(newsObject);
  assert.isTrue(story.getWebUrl() === newsObject.webUrl, "Story displays the web url");
}

testWebUrl();

function testContent(){
  newsObject = {
    id: "media/2018/jan/14/new-tabloid-observer-coming-next-week",
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
    fields: {thumbnail: "thumbnailURL",
            body: "hello"}
  };

  var story = new Story(newsObject);
  assert.isTrue(story.getContent() === newsObject.fields.body, "Story displays the content");
}

testContent();
