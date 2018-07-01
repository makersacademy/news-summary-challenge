function testStory() {
  var apiResponse = {"response":
    {
      "status":"ok","userTier":"developer","total":2045182,"startIndex":1,"pageSize":10,"currentPage":1,"pages":204519,"orderBy":"newest","results":
        [{"id":"sport/live/2018/jul/01/nba-free-agency-lebron-james-and-paul-georges-decisions-imminent",
        "type":"liveblog",
        "sectionId":"sport",
        "sectionName":"Sport",
        "webPublicationDate":"2018-07-01T11:16:26Z",
        "webTitle":"NBA free agency: LeBron James decision imminent as Paul George re-signs with Thunder",
        "webUrl":"https://www.theguardian.com/sport/live/2018/jul/01/nba-free-agency-lebron-james-and-paul-georges-decisions-imminent",
        "apiUrl":"https://content.guardianapis.com/sport/live/2018/jul/01/nba-free-agency-lebron-james-and-paul-georges-decisions-imminent",
        "fields":
          {"thumbnail":"https://media.guim.co.uk/191b818a4971ed285a07b5ac97cbf2afadab6821/0_246_5568_3341/500.jpg"},
        "isHosted":false,
        "pillarId":"pillar/sport",
        "pillarName":"Sport"
        }]
      }
    };
  var title = apiResponse.response.results[0].webTitle;
  var url = apiResponse.response.results[0].webUrl;
  var image = apiResponse.response.results[0].fields.thumbnail;
  var story = new Story(title, url, image);
  assert.isTrue('Test story contains image', story.image === "https://media.guim.co.uk/191b818a4971ed285a07b5ac97cbf2afadab6821/0_246_5568_3341/500.jpg");
  assert.isTrue('Test story contains url', story.url === "https://www.theguardian.com/sport/live/2018/jul/01/nba-free-agency-lebron-james-and-paul-georges-decisions-imminent")
  assert.isTrue('Test story contains headline', story.title === "NBA free agency: LeBron James decision imminent as Paul George re-signs with Thunder")};

testStory();
