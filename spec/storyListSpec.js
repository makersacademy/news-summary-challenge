(function(exports) {
  console.log('testOfListObjects has loaded')
  // naming the test.
  function testOfListObject() {
    //creating the object.
    var thisNewListObject = new NoteList();
    // creating a note object
    var thisNewNote = new Note("some text");
    // making a test that creates an object, adds a note to it and
    // console.log(thisNewListObject)
    // console.log(thisNewNote)
    assert.isTrue(thisNewListObject.addNoteToList(thisNewNote) === Note);
  }
  testOfListObject();
})(this);
