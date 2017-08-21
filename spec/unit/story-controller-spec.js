test.describe("StoryController", function() {

  var newsObject = { "id": "media/2017/aug/17/game-of-thrones-secrets-revealed-as-hbo-twitter-accounts-hacked",
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


  var storyListModel = new StoryListModel(Story);
  var storyListView = new StoryListView(storyListModel);
  var element = {};

  test.it("updates inner html", function() {
    var expectedString = "<ul><li><div><img src=https://media.guim.co.uk/74b2f90d9fb371b96c758b7755f9d6d5b06d4b81/0_103_3155_1894/500.jpg><a href=https://www.theguardian.com/media/2017/aug/17/game-of-thrones-secrets-revealed-as-hbo-twitter-accounts-hacked>Game of Thrones secrets revealed as HBO Twitter accounts hacked</a></div></li></ul>";
    var storyController = new StoryController(element,storyListModel, storyListView);
    storyController.createStory(newsObject);
    console.log(storyController)
    assert.isTrue(element.innerHTML === expectedString);
  });

});
