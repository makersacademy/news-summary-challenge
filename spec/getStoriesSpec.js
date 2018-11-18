describe("getStories", function() {
  it("requests stories from the guardian api", function() {

    function Document () {};

    Document.prototype.onLoad = function() {
      document = {
        apiRequestURL: function() {
          return "Guardian news story"
        }
      };
    };

    var document = new Document;
    document.onLoad();
    expect(document.apiRequestURL()).toEqual("Guardian news story")

  });
});
