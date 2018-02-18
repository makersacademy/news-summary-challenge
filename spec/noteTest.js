it('Note stored argument passed on instantiation', function() {
   var note = new Note('Note 1');
   return assert.equals(note.text, 'Note 1');
});

it("Returns a new note object", function(){
  var note = Note.createNote('Note 1')
  return assert.isTrue(note instanceof Note)
});

it('Note abbreviated to 20 characters', function() {
  var note = Note.createNote('Note about abbreviated Note - for test purposes');
  return assert.equals(note.abbreviation, 'Note about abbreviat');
})
