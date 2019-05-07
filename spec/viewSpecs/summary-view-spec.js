(function() {

  describe("SummaryView", function() {
    var summary = {
      getThumbnail: function() { return "a thumbnail" },
      getHeadline: function() { return "a headline" },
      getSummary: function() { return "a summary" }
    }
    var view = new SummaryView(summary);
    
    describe("turns a Summary object into HTML including...", function() {
      it("a thumbnail", function() {
        expect(view.getHTML()).toContain('<img src="a thumbnail">')
      })

      it("a headline", function() {
        expect(view.getHTML()).toContain('a headline')
      })

      it("a summary", function() {
        expect(view.getHTML()).toContain('a summary')
      })
    })
  })
})()
