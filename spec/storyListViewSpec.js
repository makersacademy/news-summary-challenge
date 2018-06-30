function StoryDouble(title) {
  this.title = title;
};

function StoryListDouble() {
  this.storyArray = [];
};

StoryListDouble.prototype = {
  addStory: function(apiResponse) {
    var apiResults = apiResponse.response.results
    var storyArray = []
    apiResults.forEach(function(story) {
      var title = story.webTitle;
      var storyDouble = new StoryDouble(title)
      storyArray.push(storyDouble);
    });
    this.storyArray = storyArray
  }
};

function testStoryListView() {
  var apiResponse = {"response":
    {
      "status":"ok","userTier":"developer","total":91,"startIndex":1,"pageSize":10,"currentPage":1,"pages":10,"orderBy":"newest","results":
        [{"id":"football/live/2018/jun/30/uruguay-v-portugal-world-cup-2018-live",
          "type":"liveblog",
          "sectionId":"football",
          "sectionName":"Football",
          "webPublicationDate":"2018-06-30T16:50:08Z",
          "webTitle":"Uruguay v Portugal: World Cup 2018 – live!",
          "webUrl":"https://www.theguardian.com/football/live/2018/jun/30/uruguay-v-portugal-world-cup-2018-live",
          "apiUrl":"https://content.guardianapis.com/football/live/2018/jun/30/uruguay-v-portugal-world-cup-2018-live",
          "isHosted":false,
          "pillarId":"pillar/sport",
          "pillarName":"Sport"
        },
        {"id":"world/live/2018/jun/30/trump-immigration-family-separation-protest-live-updates","type":"liveblog","sectionId":"world","sectionName":"World news","webPublicationDate":"2018-06-30T16:50:04Z","webTitle":"Protesters march against Trump immigration policies – live updates","webUrl":"https://www.theguardian.com/world/live/2018/jun/30/trump-immigration-family-separation-protest-live-updates","apiUrl":"https://content.guardianapis.com/world/live/2018/jun/30/trump-immigration-family-separation-protest-live-updates","isHosted":false,"pillarId":"pillar/news","pillarName":"News"
        }]
      }
    };

  var title = apiResponse.response.results[0].webTitle;
  var storyDouble = new StoryDouble(title);
  var storyListDouble = new StoryListDouble();
  storyListDouble.addStory(apiResponse);
  var storyListView = new StoryListView(storyListDouble);
  assert.isTrue("View list of stories", storyListView.returnHTML().includes(`<ul><li><div>Uruguay v Portugal: World Cup 2018 – live!</div></li><li><div>Protesters march against Trump immigration policies – live updates</div></li></ul>`));
};

testStoryListView();
