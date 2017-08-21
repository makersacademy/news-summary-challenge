test.describe("StoryListView", function() {

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

  var storyListModel = new StoryListModel();
  storyListModel.create(newsObject);
  var storyListView = new StoryListView();

  test.it("to html method returns string to html", function() {
    var expectedString = "<ul><li><section><img src=https://media.guim.co.uk/74b2f90d9fb371b96c758b7755f9d6d5b06d4b81/0_103_3155_1894/500.jpg><br><a href=https://www.theguardian.com/media/2017/aug/17/game-of-thrones-secrets-revealed-as-hbo-twitter-accounts-hacked>Game of Thrones secrets revealed as HBO Twitter accounts hacked</a></section></li></ul>";
    array = storyListModel.stories();
    console.log(expectedString);
    console.log(storyListView.toHtml(array));
    assert.isTrue(storyListView.toHtml(array) == expectedString);
  });



});
