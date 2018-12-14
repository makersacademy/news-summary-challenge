function articleListDoubleSetup() {
  newsList = new ArticleList();
  newsArticleObject = {
  "id": "uk-news/2018/dec/14/man-who-lost-ears-in-lancashire-machete-attack-dies-in-hospital-sajed-choudry",
  "type": "article",
  "sectionId": "uk-news",
  "sectionName": "UK news",
  "webPublicationDate": "2018-12-14T11:03:29Z",
  "webTitle": "Man who lost ears in Lancashire machete attack dies in hospital",
  "webUrl": "https://www.theguardian.com/uk-news/2018/dec/14/man-who-lost-ears-in-lancashire-machete-attack-dies-in-hospital-sajed-choudry",
  "apiUrl": "https://content.guardianapis.com/uk-news/2018/dec/14/man-who-lost-ears-in-lancashire-machete-attack-dies-in-hospital-sajed-choudry",
  "fields": {
  "thumbnail": "https://media.guim.co.uk/93e68794b9286cc202b0e6b141770d3386ef2654/0_52_747_448/500.jpg"
  },
  "isHosted": false,
  "pillarId": "pillar/news",
  "pillarName": "News"
  },

  newsArticleObject2 = {
"id": "uk-news/2018/dec/14/baby-attacked-by-two-dogs-dies-in-hospital-cambridgeshire",
"type": "article",
"sectionId": "uk-news",
"sectionName": "UK news",
"webPublicationDate": "2018-12-14T11:00:37Z",
"webTitle": "Baby attacked by two dogs dies in hospital",
"webUrl": "https://www.theguardian.com/uk-news/2018/dec/14/baby-attacked-by-two-dogs-dies-in-hospital-cambridgeshire",
"apiUrl": "https://content.guardianapis.com/uk-news/2018/dec/14/baby-attacked-by-two-dogs-dies-in-hospital-cambridgeshire",
"isHosted": false,
"pillarId": "pillar/news",
"pillarName": "News"
},


  testArray = [];
  testArray.push(newsArticleObject, newsArticleObject2);

  newsList.createArticleList(testArray)
};
