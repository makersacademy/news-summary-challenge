test.describe("Story", function() {

  newsObject = { "id": "media/2017/aug/17/game-of-thrones-secrets-revealed-as-hbo-twitter-accounts-hacked",
    "type": "article",
    "sectionId": "technology",
    "sectionName": "Technology",
    "webPublicationDate": "2017-08-17T11:36:41Z",
    "webTitle": "Game of Thrones secrets revealed as HBO Twitter accounts hacked",
    "webUrl": "https://www.theguardian.com/media/2017/aug/17/game-of-thrones-secrets-revealed-as-hbo-twitter-accounts-hacked",
    "fields": {
      "body": "<p>Several HBO Twitter accounts were hacked and ta…the future of ransomware?</a></strong></li> </ul>",
      "thumbnail": "https://media.guim.co.uk/74b2f90d9fb371b96c758b7755f9d6d5b06d4b81/0_103_3155_1894/500.jpg"
     }
   }

  var story = new Story(newsObject);

  test.it("is a story", function() {
    assert.isTrue(story instanceof Story);
  });

  test.it("has a headline", function() {
    assert.isEqual(story.headline(), newsObject.webTitle);
  });

  test.it("has an image", function() {
    assert.isEqual(story.image(), newsObject.fields.thumbnail);
  });

  test.it("has a link to the original news article", function() {
    assert.isEqual(story.webUrl(), newsObject.webUrl);
  });

  test.it("has the main content of the story", function() {
    assert.isEqual(story.content(), newsObject.fields.body);
  });

});
