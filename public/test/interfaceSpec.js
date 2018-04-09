describe("Interface", function() {

  function getFakeContent() {
    return respOutput = {
      "response": {
        "status": "ok",
        "userTier": "developer",
        "total": 1,
        "editorsPicks": [{
          "id": "society/2018/apr/07/universal-credit-backlash-millions-lose-out",
          "type": "article",
          "sectionId": "society",
          "sectionName": "Society",
          "webPublicationDate": "2018-04-07T13:40:19Z",
          "webTitle": "Ministers told to expect backlash as millions lose out from universal credit",
          "webUrl": "https://www.theguardian.com/society/2018/apr/07/universal-credit-backlash-millions-lose-out",
          "apiUrl": "https://content.guardianapis.com/society/2018/apr/07/universal-credit-backlash-millions-lose-out",
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
        }, {
          "id": "society/2018/apr/07/oulton-leeds-prefab-airey-houses-demolition-eviction",
          "type": "article",
          "sectionId": "society",
          "sectionName": "Society",
          "webPublicationDate": "2018-04-07T14:16:58Z",
          "webTitle": "‘The spirit will be lost’: residents fight eviction from their prefab homes",
          "webUrl": "https://www.theguardian.com/society/2018/apr/07/oulton-leeds-prefab-airey-houses-demolition-eviction",
          "apiUrl": "https://content.guardianapis.com/society/2018/apr/07/oulton-leeds-prefab-airey-houses-demolition-eviction",
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
        }, {
          "id": "business/2018/apr/07/global-inequality-tipping-point-2030",
          "type": "article",
          "sectionId": "business",
          "sectionName": "Business",
          "webPublicationDate": "2018-04-07T12:08:56Z",
          "webTitle": "Richest 1% on target to own two-thirds of all wealth by 2030",
          "webUrl": "https://www.theguardian.com/business/2018/apr/07/global-inequality-tipping-point-2030",
          "apiUrl": "https://content.guardianapis.com/business/2018/apr/07/global-inequality-tipping-point-2030",
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
        }]
      }
    };
  };

  describe("getNews", function() {
    it("returns the JSON response object from the API", function() {
      // .headlineGrabber#makeRequest
      var fakeHeadlines;
      var fakeResponse = getFakeContent();
      console.log("RESP:", fakeResponse)
      //var jsonText = JSON.parse(fakeResponse);
      //console.log("TEXT", jsonText)
      fakeHeadlines = fakeResponse.response.editorsPicks;
      console.log("HEAD", fakeHeadlines)
      addTitles(fakeHeadlines);
      return expect("headline_1").toContainHtmlContent("‘The spirit will be lost’: residents fight eviction from their prefab homes");
    });
  });

});
