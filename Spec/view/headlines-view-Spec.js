describe("Headlines View", function() {

  describe(".htmlString()", function() {
    it("Should return html for a list of headlines", function() {
      headlines = new Headlines();
      headlines.addArticle("thumbnail.jpg", "section", "headline", "byline", "firstParagraph", "secondParagraph", "thirdParagraph", "url");
      headlines.addArticle("lianbmuht.jpg", "noitces", "enildaeh", "enilyb", "hpargaraPtsrif", "hpargaraPdnoces", "hpargaraPdriht", "lru");
      headlinesView = new HeadlinesView(headlines);
      expect(headlinesView.htmlString()).toEqual(
        "<main>" +
          "<div class='articles-container breaks'>" +
            "<a class='article' href='#article/3'>" +
              "<div class='thumbnail'>" +
                "<img src='thumbnail.jpg' alt='article thumbnail'>" +
              "</div>" +
              "<p class='headline'><span class='section'>section</span> &#x2F; headline</p>" +
            "</a>" +
          "</div>" +
          "<div class='articles-container breaks'>" +
            "<a class='article' href='#article/4'>" +
              "<div class='thumbnail'>" +
                "<img src='lianbmuht.jpg' alt='article thumbnail'>" +
              "</div>" +
              "<p class='headline'><span class='section'>noitces</span> &#x2F; enildaeh</p>" +
            "</a>" +
          "</div>" +
        "</main>"
      )
    })
  })
})