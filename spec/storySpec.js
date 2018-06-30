function testStory() {
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
  var story = new Story(title);
  assert.isTrue('Test story contains headline', story.title === "Uruguay v Portugal: World Cup 2018 – live!")};

testStory();
