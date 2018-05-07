describe("Article", function () {
  it("can return the headline of a JSON string", function () {
    // arrange
    var jsonString = {"response":{"status":"ok","userTier":"developer","total":1,"content":{"id":"politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2018-05-05T20:30:01Z","webTitle":"Labour peers accuse Corbyn of Brexit cowardice","webUrl":"https://www.theguardian.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","apiUrl":"https://content.guardianapis.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","isHosted":false,"pillarId":"pillar/news","pillarName":"News"}}}

    // act
    var article = new Article(jsonString);
    // assert
    expects(article.headline).toEqual(jsonString.response.content.webTitle);
  })

  it("can return the publication date of an article given a JSON string", function () {
    // arrange
    var jsonString = {"response":{"status":"ok","userTier":"developer","total":1,"content":{"id":"politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2018-05-05T20:30:01Z","webTitle":"Labour peers accuse Corbyn of Brexit cowardice","webUrl":"https://www.theguardian.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","apiUrl":"https://content.guardianapis.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","isHosted":false,"pillarId":"pillar/news","pillarName":"News"}}}
    // act
    var article = new Article(jsonString);
    var date = jsonString.response.content.webPublicationDate.split("T")[0]
    // assert
    expects(article.publicationDate).toEqual(date);
  })
  it("can return the URL of an article given a JSON string", function (){
    // arrange
    var jsonString = {"response":{"status":"ok","userTier":"developer","total":1,"content":{"id":"politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2018-05-05T20:30:01Z","webTitle":"Labour peers accuse Corbyn of Brexit cowardice","webUrl":"https://www.theguardian.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","apiUrl":"https://content.guardianapis.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","isHosted":false,"pillarId":"pillar/news","pillarName":"News"}}}
    // act
    var article = new Article(jsonString);
    var url = jsonString.response.content.webUrl;
    // assert
    expects(article.url).toEqual(url);
  })


})
