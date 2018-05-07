(function (exports) {
  var article;
  function testHeadlinetext() {
    // arrange
    var jsonString = {"response":{"status":"ok","userTier":"developer","total":1,"content":{"id":"politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2018-05-05T20:30:01Z","webTitle":"Labour peers accuse Corbyn of Brexit cowardice","webUrl":"https://www.theguardian.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","apiUrl":"https://content.guardianapis.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","isHosted":false,"pillarId":"pillar/news","pillarName":"News"}}}

    // act
    var headline = new Headline(jsonString.response.content.webTitle);

    //assert
    expect(headline.text).toEqual(jsonString.response.content.webTitle);
  };
  testHeadlinetext();

})(this);
