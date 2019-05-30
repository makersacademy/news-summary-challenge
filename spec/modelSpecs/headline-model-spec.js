(function() {

  describe("A headline object", function() {
    it("can have a headline", function() {
      var headline = new Headline({ headline: "This is a headline" })
      expect(headline.getHeadline()).toBe("This is a headline")
    })

    it("can have a url", function() {
      var headline = new Headline({ url: "This is a URL" })
      expect(headline.getURL()).toBe("This is a URL")
    })

    it("can have a thumbnail", function() {
      var headline = new Headline({ thumbnail: "This is a thumbnail" })
      expect(headline.getThumbnail()).toBe("This is a thumbnail")
    })

    it("can have an id", function() {
      var headline = new Headline({ id: "This is an ID" })
      expect(headline.getID()).toBe("This is an ID")
    })
  })

})()
