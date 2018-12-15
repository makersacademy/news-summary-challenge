describe("Controller", function() {

  describe(".html()", function () {
    it("Should update the html of the page", function() {
      headlines = new Headlines();
      headlines.addArticle("../images/thumbnail.gif", "headline", "firstParagraph", "secondParagraph", "thirdParagraph", "url");
      controller = new Controller(headlines);
      controller.html("test");
      document.addEventListener("DOMContentLoaded", function() {
        expect(document.getElementById("test").innerHTML).toEqual(
          '<div>' +
            '<img src="../images/thumbnail.gif" alt="article thumbnail">' +
            '<h1>headline</h1>' +
          '</div>'
        );
      })
    })
  })
})
