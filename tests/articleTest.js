it('Note stored argument passed on instantiation', function() {
   var article = new Article('New gym opened in London');
   return assert.equals(note.title, 'New gym opened in London');
});

it("Returns a new note object", function(){
  var note = Note.createArticle('Note 1')
  return assert.isTrue(note instanceof Note)
});
