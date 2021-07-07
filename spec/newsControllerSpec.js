// function StoryDouble(title) {
//   this.title = title;
// };
//
// function StoryListDouble() {
//   this.storyArray = [];
// };
//
// StoryListDouble.prototype = {
//   addStory: function(apiResponse) {
//     var apiResults = apiResponse.response.results
//     var storyArray = []
//     apiResults.forEach(function(story) {
//       var title = story.webTitle;
//       var storyDouble = new StoryDouble(title)
//       storyArray.push(storyDouble);
//     });
//     this.storyArray = storyArray
//   }
// };
//
// function StoryListViewDouble(storyListDouble) {};
//
// StoryListViewDouble.prototype = {
//   returnHTML: function() {
//     return "<ul><li><div>Uruguay v Portugal: World Cup 2018 – live!</div></li></ul>";
//   }
// };
//
// function testNewsControllerHTML() {
//   var apiResponse = {"response":
//     {
//       "status":"ok","userTier":"developer","total":91,"startIndex":1,"pageSize":10,"currentPage":1,"pages":10,"orderBy":"newest","results":
//         [{"id":"football/live/2018/jun/30/uruguay-v-portugal-world-cup-2018-live",
//           "type":"liveblog",
//           "sectionId":"football",
//           "sectionName":"Football",
//           "webPublicationDate":"2018-06-30T16:50:08Z",
//           "webTitle":"Uruguay v Portugal: World Cup 2018 – live!",
//           "webUrl":"https://www.theguardian.com/football/live/2018/jun/30/uruguay-v-portugal-world-cup-2018-live",
//           "apiUrl":"https://content.guardianapis.com/football/live/2018/jun/30/uruguay-v-portugal-world-cup-2018-live",
//           "isHosted":false,
//           "pillarId":"pillar/sport",
//           "pillarName":"Sport"
//         }]
//       }
//     };
//   var element = document.getElementById("news");
//   var storyListDouble = new StoryListDouble();
//   var storyListViewDouble = new StoryListViewDouble(storyListDouble);
//   var newsController = new NewsController();
//   storyListDouble.addStory(apiResponse);
//   document.getElementById("news").innerHTML += storyListViewDouble.returnHTML()
//   assert.isTrue("testNewsControllerHTML", document.getElementById("news").includes("<ul><li><div>Uruguay v Portugal: World Cup 2018 – live!</div></li></ul>"));
// };
//
// testNewsControllerHTML();
