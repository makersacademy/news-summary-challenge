let articleMock1 = {
  returnTitle: function () {
    return 'Corona scare 1';
  },
  returnUrlId: function(){
    return 'corona/story1'
  },
  returnThumbnail: function(){
    return 'corona1.img'
  }
}
let articleMock2 = {
  returnTitle: function () {
    return 'Corona scare 2';
  },
  returnUrlId: function(){
    return 'corona/story2'
  },
  returnThumbnail: function(){
    return 'corona2.img'
  }
}
let headlineMocks = [articleMock1.returnTitle(), articleMock2.returnTitle()]

let articleListMock = {
  returnHeadlines: function () {
    return headlineMocks
  },
  addArticle: function (){},
  getArticle: function(){}
}

let articleSummaryViewMock = {
  returnHTML: function(){
    return `<div id="summary">summary of corona scare 1</div>`
  }
}

let articleHeadlineListViewMock = {
  returnHTML: function(){
    return `<ul style="list-style-type:none"><li><div id="headline"><a href='#articles/0'>Corona scare 1</a></div></li><li><div id="headline"><a href='#articles/1'>Corona scare 2</a></div></li></ul>`
  }
}

let articleControllerMock = {
  renderCurrentArticles: function(){
    document.getElementById("app").innerHTML = articleHeadlineListView.returnHTML()
  },
  renderSummary: function(id){
    document.getElementById("app").innerHTML = articleSummaryViewMock.returnHTML()
  },
  httpGetAsync: function(url, callback){}
}

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

