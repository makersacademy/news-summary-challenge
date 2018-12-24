'use strict'

var controller = new Controller()

tea.describe('controller', function() {

  tea.it('can be instantied', function() {
    var controller = new Controller();
    tea.check(controller instanceof Controller);
  })

  // tea.it('renders html on an element', function() {
  //   var el = document.createElement("p");
  //   el.setAttribute("id", "app");
  //   var html = '<p>html</p>';
  //   result = controller.render("app", html)
  //   tea.check(html, result)
  // })

})
