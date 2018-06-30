function StoryDouble(title) {
  this.title = title;
};

function testEmptyStoryList() {
  var storyList = new StoryList();
  assert.isTrue("Story list starts empty", storyList.storyArray[0] === undefined);
};

testEmptyStoryList();

function testStoryList() {
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
        }]
      }
    };
  var title = apiResponse.response.results[0].webTitle
  var storyList = new StoryList();
  storyList.addStory(apiResponse);
  assert.isTrue("Add one story to story list", storyList.storyArray[0].title === "Uruguay v Portugal: World Cup 2018 – live!");
};

testStoryList();

function testStoryListWithTwoStories() {
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
  var title = apiResponse.response.results[0].webTitle
  var storyList = new StoryList();
  storyList.addStory(apiResponse);
  assert.isTrue("Add first of two stories to story list", storyList.storyArray[0].title === "Uruguay v Portugal: World Cup 2018 – live!");
  assert.isTrue("Add second of two stories to story list", storyList.storyArray[1].title ==="Protesters march against Trump immigration policies – live updates");
};

testStoryListWithTwoStories();
