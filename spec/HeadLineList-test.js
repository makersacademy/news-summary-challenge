describe("Headline List", function() {

var apiCallMock = {
  makeCall: function() {
    return [{
      "apiUrl":"https://content.guardianapis.com/football/live/2017/aug/20/barcelona-v-real-betis-la-liga-live",
      "id":"football/live/2017/aug/20/barcelona-v-real-betis-la-liga-live",
      "webTitle":"Barcelona v Real Betis: La Liga – live!",
      "webUrl":"https://www.theguardian.com/football/live/2017/aug/20/barcelona-v-real-betis-la-liga-live"
  }];
}
};
var hlList = new HeadlineList(apiCallMock);

  it("has an empty array of headlines by default", function() {
    assert.isTrue(hlList.getList().length === 0);
  })

});
