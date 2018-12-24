'use strict'

var controller = new Controller()

tea.describe('controller', function() {

  tea.it('can be instantied', function() {
    var controller = new Controller();
    tea.check(controller instanceof Controller);
  })

})
