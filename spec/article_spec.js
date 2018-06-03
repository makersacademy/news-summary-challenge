(function(){

  var apiResponse = {"response":
                          {
                          "status":"ok",
                          "userTier":"developer",
                          "total":119782,
                          "startIndex":1,
                          "pageSize":10,
                          "currentPage":1,
                          "pages":11979,
                          "orderBy":"newest",
                            "results":[
                              {
                                "id":"uk-news/2018/jun/01/rmt-union-head-calls-for-transport-secretary-to-resign-over-rail-chaos",
                                "type":"article",
                                "sectionId":"uk-news",
                                "sectionName":"UK news",
                                "webPublicationDate":"2018-06-01T17:14:22Z",
                                "webTitle":"Northern axes trains as RMT calls for transport secretary to resign",
                                "webUrl":"https://www.theguardian.com/uk-news/2018/jun/01/rmt-union-head-calls-for-transport-secretary-to-resign-over-rail-chaos",
                                "apiUrl":"https://content.guardianapis.com/uk-news/2018/jun/01/rmt-union-head-calls-for-transport-secretary-to-resign-over-rail-chaos",
                                "isHosted":false,
                                "pillarId":"pillar/news",
                                "pillarName":"News",
                                "fields": {
                                  "thumbnail": "https://media.guim.co.uk/transport_secretary.jpg",
                                  }
                                }]
                              }
                            }

  function testArticleReturnsArticleHeadline() {
    var headline = apiResponse.response.results[0].webTitle
    var url = apiResponse.response.results[0].webUrl;
    var img = "https://media.guim.co.uk/transport_secretary.jpg"
    var article = new Article(headline, img, 'someFakeURL');
    assert.isTrue(article.headline === "Northern axes trains as RMT calls for transport secretary to resign", 'testArticleReturnsArticleHeadline')
  }

  testArticleReturnsArticleHeadline()

  function testArticleReturnsArticleURL() {
    var url = apiResponse.response.results[0].webUrl;
    var headline = "Northern axes trains"
    var img = "https://media.guim.co.uk/transport_secretary.jpg"
    var article = new Article(headline, img, url)
    assert.isTrue(article.url === "https://www.theguardian.com/uk-news/2018/jun/01/rmt-union-head-calls-for-transport-secretary-to-resign-over-rail-chaos", 'testArticleReturnsArticleURL')
  }

  testArticleReturnsArticleURL();

  function testArticleThumbnail() {
    var url = apiResponse.response.results[0].webUrl;
    var headline = "Northern axes trains"
    var img = "https://media.guim.co.uk/transport_secretary.jpg"
    var article = new Article(headline, img, url);
    assert.isTrue(article.img === img, 'testArticleThumbnail')
  }

  testArticleThumbnail();



})(this)
