
// use `populate` in console to create new List and populate with 2 notes

describe('_text', function(){
  it('stores the string as a text property', function(){
    var note = new Note("kaari is green");
    expect(note._text).toBe("kaari is green")
  })
});

describe('returnString', function(){
  it('returns the text property of the note', function(){
    var note = new Note("kaari is green");
    expect(note.returnString()).toBe("kaari is green")
  })
});
