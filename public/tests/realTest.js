document.getElementById("pageUnderTest").onload =
function(){describe('Front End (Main Page)', function() {
  describe('Page elements', function() {
    it('Has a title called "News headlines"', function() {
      return expect('header').toContainHtmlContent('News Headlines')
    })

    it('Has a stories div', function() {
      return expect('stories').toBeHtmlElement();
    });

    it('Has a summary div', function() {
      return expect('summary').toBeHtmlElement();
    });

  });

});
};
