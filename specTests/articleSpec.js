describe("Article", function () {
  it("can return the headline of a JSON string", function () {
    // arrange
    var jsonString = {"response":{"status":"ok","userTier":"developer","total":1,"content":{"id":"politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2018-05-05T20:30:01Z","webTitle":"Labour peers accuse Corbyn of Brexit cowardice","webUrl":"https://www.theguardian.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","apiUrl":"https://content.guardianapis.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","isHosted":false,"pillarId":"pillar/news","pillarName":"News"}}}
    var article = new Article(jsonString);
    // act
    // assert
    expects(article.headline).toEqual(jsonString.response.content.webTitle);
  })

})
