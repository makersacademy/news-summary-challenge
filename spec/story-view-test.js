'use strict';

(function TestReturnsHTMLList() {
  var story = new Story()
  story.addTitle("Favourite food: pesto")

  var view = new View(story)

  assert.isTrue(view.createString() === "<ul><li><div><a>Favourite food: pesto</a></div></li></ul>")
})();
