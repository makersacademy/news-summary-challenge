(function testNoteCreation() {

  it("should have body text passed in as argument to Note", function() {
    note = new Note("hello")
    jennifer.expects(note.body).toEqual("hello")
  });

})();
