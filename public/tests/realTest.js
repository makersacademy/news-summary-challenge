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

    it('Has a summary div', function() {
      return expect('summary-text').toBeHtmlElement();
    });

  });

  describe('Summary', function() {
    it('Automatically shows the stories', function() {
      return expect("stories").toBeVisible();
    });
    it('Can click on a div to see the summary', function() {
      helpers.clickObject(0)
      return expect("summary").toBeVisible();
    });
    it('Hides the stories when you click to see summary', function() {
      helpers.clickObject(0)
      return expect("stories").toNotBeVisible();
    });
    it('Can click on a div and then click back', function() {
      helpers.clickObject(0)
      helpers.clickObject('back_button')
      return expect("summary").toNotBeVisible();
    });
    it('Shows the stories after you click back', function() {
      helpers.clickObject(0)
      helpers.clickObject('back_button')
      return expect("stories").toBeVisible();
    });
  });

});
};
