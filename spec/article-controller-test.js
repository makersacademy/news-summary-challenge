let articleController = new ArticleController("mockAPI")
// let mockXMLResponse = {
//   "response": {
//     "status": "ok",
//     "userTier": "developer",
//     "total": 137,
//     "startIndex": 1,
//     "pageSize": 10,
//     "currentPage": 1,
//     "pages": 14,
//     "orderBy": "newest",
//     "results": [
//       {
//         "id": "sport/live/2020/nov/15/the-masters-2020-dustin-johnson-leads-final-round-at-augusta-live",
//         "type": "liveblog",
//         "sectionId": "sport",
//         "sectionName": "Sport",
//         "webPublicationDate": "2020-11-15T15:43:42Z",
//         "webTitle": "The Masters 2020: Dustin Johnson leads final round at Augusta – live!",
//         "webUrl": "https://www.theguardian.com/sport/live/2020/nov/15/the-masters-2020-dustin-johnson-leads-final-round-at-augusta-live",
//         "apiUrl": "https://content.guardianapis.com/sport/live/2020/nov/15/the-masters-2020-dustin-johnson-leads-final-round-at-augusta-live",
//         "headline": "The Masters 2020: Dustin Johnson leads final round at Augusta – live!",
//         "isHosted": false,
//         "pillarId": "pillar/sport",
//         "pillarName": "Sport"
//       },
//       {
//         "id": "world/live/2020/nov/15/coronavirus-live-news-us-confirms-177000-daily-cases-as-victoria-marks-16-days-with-no-infections",
//         "type": "liveblog",
//         "sectionId": "world",
//         "sectionName": "World news",
//         "webPublicationDate": "2020-11-15T15:42:49Z",
//         "webTitle": "Coronavirus live news: German minister predicts five more months of 'severe restrictions'; Greece shuts primary schools",
//         "webUrl": "https://www.theguardian.com/world/live/2020/nov/15/coronavirus-live-news-us-confirms-177000-daily-cases-as-victoria-marks-16-days-with-no-infections",
//         "apiUrl": "https://content.guardianapis.com/world/live/2020/nov/15/coronavirus-live-news-us-confirms-177000-daily-cases-as-victoria-marks-16-days-with-no-infections",
//         "headline": "Coronavirus live news: German minister predicts five more months of 'severe restrictions'; Greece shuts primary schools",
//         "isHosted": false,
//         "pillarId": "pillar/news",
//         "pillarName": "News"
//       }
//     ]
//   }
// }


it('can be instantiated', function(){
  expect(articleController).toBeAnInstanceOf(ArticleController)
})

it('changes inner HTML of app div to headline list', function(){
  // only failing as inner html has " " surrounding href
  console.log(document.getElementById("app").innerHTML)
  expect(document.getElementById("app").innerHTML).toEqual("<ul><li><a href='#articles/0'>The Masters 2020: Dustin Johnson leads final round at Augusta – live!</a></li><li><a href='#articles/1'>Coronavirus live news: German minister predicts five more months of 'severe restrictions'; Greece shuts primary schools</a></li></ul>")
})

it('displays webURL when you click on link', function(){
  articleController.fetchCurrentArticles()
  articleController.renderSummary(0)
  console.log(document.getElementById("app").innerHTML)
  expect(document.getElementById("app").innerHTML).toEqual("<div>https://www.theguardian.com/sport/live/2020/nov/15/the-masters-2020-dustin-johnson-leads-final-round-at-augusta-live</div>")
})

// it('reveals summary when link of related header is clicked', function(){
//   // passing as a feature test
//   // need to make articleSummaryView receive .returnHTML and output "<div>summary of corona scare 1</div>"
//   articleControllerFeature.renderHeadlines()
//   articleControllerFeature.renderSummary(0)
//   console.log(document.getElementById("app"))
//   expect(document.getElementById("app").innerHTML).toEqual("<div>Test Summary</div>")
// })

// it("retrieves today's articles", function(){
//   expect(articleController.fetchCurrentArticles())
// })