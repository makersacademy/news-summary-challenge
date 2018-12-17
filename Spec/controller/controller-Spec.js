describe("Controller", function() {

  describe(".html()", function() {
    it("Should update the html of the page", function() {
      headlines = new Headlines();
      headlines.addArticle("../images/thumbnail.gif", "section", "headline", "byline", "firstParagraph", "secondParagraph", "thirdParagraph", "url");
      headlines.addArticle("../images/thumbnail.gif", "noitces", "enildaeh", "enilyb", "hpargaraPtsrif", "hpargaraPdnoces", "hpargaraPdriht", "lru");
      controller = new Controller(headlines);
      document.addEventListener("DOMContentLoaded", function() {
        controller.html("test");
        expect(document.getElementById("test").innerHTML).toEqual(
          '<main>' +
            '<div class="articles-container breaks">' +
              '<a class="article" href="#article/7">' +
                '<div class="thumbnail">' +
                  '<img src="../images/thumbnail.gif" alt="article thumbnail">' +
                '</div>' +
                '<p class="headline"><span class="section">section</span> / headline</p>' +
              '</a>' +
            '</div>' +
            '<div class="articles-container breaks">' +
              '<a class="article" href="#article/8">' +
                '<div class="thumbnail">' +
                  '<img src="../images/thumbnail.gif" alt="article thumbnail">' +
                '</div>' +
                '<p class="headline"><span class="section">noitces</span> / enildaeh</p>' +
              '</a>' +
            '</div>' +
          '</main>'
        );
      })
    })
  })

  describe(".casualObserver()", function() {
    it("Should observer a change to the url", function() {
      headlines = new Headlines();
      headlines.addArticle("../images/thumbnail.gif", "section", "headline", "byline", "firstParagraph", "secondParagraph", "thirdParagraph", "url");
      headlines.addArticle("../images/thumbnail.gif", "noitces", "enildaeh", "enilyb", "hpargaraPtsrif", "hpargaraPdnoces", "hpargaraPdriht", "lru");
      controller = new Controller(headlines);
      document.addEventListener("DOMContentLoaded", function() {
        controller.html("test");
        document.getElementById("test").firstChild.firstChild.firstChild.click();
        expect(window.location.hash).toEqual("#article/7")
      })
    })
  })
})
