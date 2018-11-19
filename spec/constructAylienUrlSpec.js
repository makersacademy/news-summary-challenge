describe("ConstructAylienUrl", function(){
  it("creates a url for an aylien API request when given a story url", function() {
    var constructAylienUrl = new ConstructAylienUrl;
    expect(constructAylienUrl.getUrl("http://caitlin.com")).toEqual("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=http://caitlin.com")
  });
});
