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
          '<div>' +
            '<a href="#article/7">' +
              '<img src="../images/thumbnail.gif" alt="article thumbnail">' +
              '<h1>section / headline</h1>' +
            '</a>' +
          '</div>' +
          '<div>' +
            '<a href="#article/8">' +
              '<img src="../images/thumbnail.gif" alt="article thumbnail">' +
              '<h1>noitces / enildaeh</h1>' +
            '</a>' +
          '</div>'
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
        document.getElementById("test").firstChild.firstChild.click();
        expect(window.location.hash).toEqual("#article/7")
      })
    })
  })
})
