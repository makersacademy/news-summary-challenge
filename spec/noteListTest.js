var newNote = {}
var note = { createNote: function() {return newNote} };

it('Notelist stores a new note', function() {
  var noteList = new NoteList(note);
  noteList.addNewNote("Hello");
  return assert.isTrue(noteList.notes().includes(newNote));
});



var note2 = { createNote: function(string) {return string} };


it('Notelist returns latest note', function() {
  var noteList = new NoteList(note2);
  noteList.addNewNote("Hello");
  noteList.addNewNote("Goodbye");
  return assert.equals(noteList.latestNote(), 'hello');
});
