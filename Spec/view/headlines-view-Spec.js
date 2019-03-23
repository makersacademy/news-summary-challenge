describe('Headlines View', function () {
  describe('.htmlString()', function () {
    it('Should return html for a list of headlines', function () {
      headlines = new Headlines()
      headlines.addArticle('thumbnail.jpg', 'section', 'headline', 'byline', 'firstParagraph', 'secondParagraph', 'thirdParagraph', 'url')
      headlines.addArticle('lianbmuht.jpg', 'noitces', 'enildaeh', 'enilyb', 'hpargaraPtsrif', 'hpargaraPdnoces', 'hpargaraPdriht', 'lru')
      headlinesView = new HeadlinesView(headlines)
      expect(headlinesView.htmlString()).toEqual(
        '<div id="cabinet">' +
          '<div id="header">' +
            '<img src="images/the-guardian-logo.png" alt="The Guardian">' +
            '<p><span class="section">In Summary</span> /</p>' +
          '</div>' +
          '<main>' +
            '<div class="article-container">' +
              '<a href="#article/7">' +
                '<div class="thumbnail">' +
                  '<img src="thumbnail.jpg" alt="article thumbnail">' +
                '</div>' +
                '<p class="headline"><span class="section">section</span> / headline</p>' +
              '</a>' +
            '</div>' +
            '<div class="article-container">' +
              '<a href="#article/8">' +
                '<div class="thumbnail">' +
                  '<img src="lianbmuht.jpg" alt="article thumbnail">' +
                '</div>' +
                '<p class="headline"><span class="section">noitces</span> / enildaeh</p>' +
              '</a>' +
            '</div>' +
          '</main>' +
        '</div>'
      )
    })
  })
})
