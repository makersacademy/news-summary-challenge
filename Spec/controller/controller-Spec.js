describe('Controller', function () {
  describe('.html()', function () {
    it('Should update the html of the page', function () {
      headlines = new Headlines()
      headlines.addArticle('../images/thumbnail.gif', 'section', 'headline', 'byline', 'firstParagraph', 'secondParagraph', 'thirdParagraph', 'url')
      headlines.addArticle('../images/thumbnail.gif', 'noitces', 'enildaeh', 'enilyb', 'hpargaraPtsrif', 'hpargaraPdnoces', 'hpargaraPdriht', 'lru')
      controller = new Controller(headlines)
      document.addEventListener('DOMContentLoaded', function () {
        controller.html('test')
        expect(document.getElementById('test').innerHTML).toEqual(
          '<div id="cabinet">' +
            '<div id="header">' +
              '<img src="images/the-guardian-logo.png" alt="The Guardian">' +
              '<p><span class="section">In Summary</span> /</p>' +
            '</div>' +
            '<main>' +
              '<div class="article-container">' +
                '<a href="#article/2">' +
                  '<div class="thumbnail">' +
                    '<img src="../images/thumbnail.gif" alt="article thumbnail">' +
                  '</div>' +
                  '<p class="headline"><span class="section">section</span> / headline</p>' +
                '</a>' +
              '</div>' +
              '<div class="article-container">' +
                '<a href="#article/3">' +
                  '<div class="thumbnail">' +
                    '<img src="../images/thumbnail.gif" alt="article thumbnail">' +
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

  describe('.casualObserver()', function () {
    it('Should observer a change to the url', function () {
      headlines = new Headlines()
      headlines.addArticle('../images/thumbnail.gif', 'section', 'headline', 'byline', 'firstParagraph', 'secondParagraph', 'thirdParagraph', 'url')
      headlines.addArticle('../images/thumbnail.gif', 'noitces', 'enildaeh', 'enilyb', 'hpargaraPtsrif', 'hpargaraPdnoces', 'hpargaraPdriht', 'lru')
      controller = new Controller(headlines)
      document.addEventListener('DOMContentLoaded', function () {
        controller.html('test')
        document.getElementById('test').firstChild.childNodes(1).firstChild.click()
        expect(window.location.hash).toEqual('#article/7')
      })
    })
  })
})
