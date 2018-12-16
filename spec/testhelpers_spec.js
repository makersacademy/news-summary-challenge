function articleListDoubleSetup() {
  newsList = new ArticleList();
  newsArticleObject = {
"id": "uk-news/2018/dec/15/large-fire-breaks-out-at-chester-zoo",
"type": "article",
"sectionId": "uk-news",
"sectionName": "UK news",
"webPublicationDate": "2018-12-15T13:33:21Z",
"webTitle": "Large fire breaks out at Chester zoo",
"webUrl": "https://www.theguardian.com/uk-news/2018/dec/15/large-fire-breaks-out-at-chester-zoo",
"apiUrl": "https://content.guardianapis.com/uk-news/2018/dec/15/large-fire-breaks-out-at-chester-zoo",
"isHosted": false,
"pillarId": "pillar/news",
"pillarName": "News"
},

  newsArticleObject2 = {
"id": "education/2018/dec/15/uk-universitity-tells-iranin-student-pay-tuition-fees-in-cash-trump-sanctions",
"type": "article",
"sectionId": "education",
"sectionName": "Education",
"webPublicationDate": "2018-12-15T14:00:12Z",
"webTitle": "UK university tells Iranian student: go home and get tuition fees in cash",
"webUrl": "https://www.theguardian.com/education/2018/dec/15/uk-universitity-tells-iranin-student-pay-tuition-fees-in-cash-trump-sanctions",
"apiUrl": "https://content.guardianapis.com/education/2018/dec/15/uk-universitity-tells-iranin-student-pay-tuition-fees-in-cash-trump-sanctions",
"isHosted": false,
"pillarId": "pillar/news",
"pillarName": "News"
},


  testArray = [];
  testArray.push(newsArticleObject, newsArticleObject2);

  newsList.createArticleList(testArray)
};
