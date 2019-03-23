describe('Article View', function () {
  describe('.htmlString()', function () {
    it('Should return html for an article', function () {
      article = new Article('thumbnail.jpg', 'section', 'headline', 'byline', 'firstParagraph', 'secondParagraph', 'thirdParagraph', 'url')
      articleView = new ArticleView(article)
      expect(articleView.htmlString()).toEqual(
        '<div id="one">' +
          '<div id="header"><img src="images/the-guardian-logo.png" alt="The Guardian"></div>' +
          '<div>' +
            '<p id="main-section"><span class="section">section</span> /</p>' +
            '<img id="main-picture" src="thumbnail.jpg" alt="article thumbnail">' +
            '<div id="main-headline">headline</div>' +
            '<div id="by-line">by byline</div>' +
            '<p class="paragraph">firstParagraph</p>' +
            '<p class="paragraph">secondParagraph</p>' +
            '<p class="paragraph">thirdParagraph"</p>' +
            '<a id="onwards" href="url">Click here for the full Guardian article</a>' +
          '</div>' +
        '</div>'
      )
    })
  })
})
