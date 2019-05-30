(function(){

  describe('A summary object', function() {
    var summary = new Summary({
      thumbnail: "the thumbnail",
      headline: "the headline",
      summary: "the summary"
    });

    it("has a thumbnail", function() {
      expect(summary.getThumbnail()).toBe('the thumbnail')
    })

    it("has a headline", function() {
      expect(summary.getHeadline()).toBe('the headline')
    })

    it("has a summary", function() {
      expect(summary.getSummary()).toBe('the summary')
    })
  })
})()
