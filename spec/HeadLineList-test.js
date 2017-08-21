describe("Headline List", function() {

var apiCallMock = {
  makeCall: function() {
    return [{
      "apiUrl":"https://content.guardianapis.com/football/live/2017/aug/20/barcelona-v-real-betis-la-liga-live",
      "id":"football/live/2017/aug/20/barcelona-v-real-betis-la-liga-live",
      "isHosted":false,
      "sectionId":"football",
      "sectionName":"Football",
      "type":"liveblog",
      "webPublicationDate":"2017-08-20T18:43:53Z",
      "webTitle":"Barcelona v Real Betis: La Liga – live!",
      "webUrl":"https://www.theguardian.com/football/live/2017/aug/20/barcelona-v-real-betis-la-liga-live"
  }];
}
};
var hlList = new HeadlineList(apiCallMock);

  it("has an empty array of headlines by default", function() {
    assert.isTrue(hlList.getList().length === 0);
  })

  // it("adds the headline title to the array", function() {
  //   assert.isTrue(hlList.addHeadlines(apiCallMock.makeCall()) === ["Barcelona v Real Betis: La Liga – live!"]);
  // })
});
