(function testNoteCreationWithInterface() {

 it("should display a note on the screen", function() {
    addNote("I am the Edge")
    loadNote(0)
    var content = document.getElementById('noteDisplayBox').value
    jennifer.expects(content).toEqual("I am the Edge")
  });

})();
