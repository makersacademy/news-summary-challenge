describe("Api call", function() {
  var api = new ApiCall("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=test");

  it("makes a call to the guardian api", function() {
    assert.isTrue(api.makeCall() !== "");
  })

});
