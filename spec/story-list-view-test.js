(function testReturnsHTMLList() {
  var list = new List()
  list.newStory("Favourite food: pesto")
  list.newStory("Favourite drink: seltzer")

  var view = new View(list)

  assert.isTrue(view.createString() === "<ul><li><div><a href='#0'>Favourite food: pest</a></div></li><li><div><a href='#1'>Favourite drink: sel</a></div></li></ul>")
})();
