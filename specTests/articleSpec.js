describe("Article", function () {
  it("can return the headline of a JSON string", function () {
    // arrange
    var jsonString = {"id":"politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2018-05-05T20:30:01Z","webTitle":"Labour peers accuse Corbyn of Brexit cowardice","webUrl":"https://www.theguardian.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","apiUrl":"https://content.guardianapis.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","fields":{"thumbnail":"https://media.guim.co.uk/c83ca7838b85ededd403b41730b3e3393fc6d9f5/0_0_4372_2623/500.jpg"},"isHosted":false,"pillarId":"pillar/news","pillarName":"News"}

    // act
    var article = new Article(jsonString);
    // assert
    expects(article.headline).toEqual(jsonString.webTitle);
  })

  it("can return the publication date of an article given a JSON string", function () {
    // arrange
    var jsonString = {"id":"politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2018-05-05T20:30:01Z","webTitle":"Labour peers accuse Corbyn of Brexit cowardice","webUrl":"https://www.theguardian.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","apiUrl":"https://content.guardianapis.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","fields":{"thumbnail":"https://media.guim.co.uk/c83ca7838b85ededd403b41730b3e3393fc6d9f5/0_0_4372_2623/500.jpg"},"isHosted":false,"pillarId":"pillar/news","pillarName":"News"}
    // act
    var article = new Article(jsonString);
    var date = jsonString.webPublicationDate.split("T")[0]
    // assert
    expects(article.publicationDate).toEqual(date);
  })
  it("can return the URL of an article given a JSON string", function (){
    // arrange
    var jsonString = {"id":"politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2018-05-05T20:30:01Z","webTitle":"Labour peers accuse Corbyn of Brexit cowardice","webUrl":"https://www.theguardian.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","apiUrl":"https://content.guardianapis.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","fields":{"thumbnail":"https://media.guim.co.uk/c83ca7838b85ededd403b41730b3e3393fc6d9f5/0_0_4372_2623/500.jpg"},"isHosted":false,"pillarId":"pillar/news","pillarName":"News"}
    var article = new Article(jsonString);
    var url = "https://www.theguardian.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice";
    // assert
    expects(article.url).toEqual(url);
  })
  it("has an image URL attribute of an article given a JSON string", function (){
    // arrange
    var jsonString = {"id":"politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2018-05-05T20:30:01Z","webTitle":"Labour peers accuse Corbyn of Brexit cowardice","webUrl":"https://www.theguardian.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","apiUrl":"https://content.guardianapis.com/politics/2018/may/05/labour-peers-accuse-corbyn-brexit-cowardice","fields":{"thumbnail":"https://media.guim.co.uk/c83ca7838b85ededd403b41730b3e3393fc6d9f5/0_0_4372_2623/500.jpg"},"isHosted":false,"pillarId":"pillar/news","pillarName":"News"}
    // act
    var article = new Article(jsonString);
    var thumbnailURL = "https://media.guim.co.uk/c83ca7838b85ededd403b41730b3e3393fc6d9f5/0_0_4372_2623/500.jpg";
    //assert
    expects(article.thumbnail).toEqual(thumbnailURL);

  })


})
