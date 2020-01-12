var titleList = new TitleList();

titleList.addTitle("string1");
titleList.addTitle("string2");


// function testTitlesArray(){
//     assert.isTrue(Array.isArray(titleList.titles));
// };


function addTitle() {
    assert.isTrue(titleList.titles[0].returnText() === "string1")
    assert.isTrue(titleList.titles[1].returnText() === "string2")
};


testTitlesArray();
addTitle();

// function testReturnTitles(){
//     titles = titleList.returnTitles();
//     assert.isTrue(titles[0])
// };

///


// function testReturnNotes() {
//   notes = notesList.returnNotes();
//   assert.isTrue(notes[0].returnText() === "string1")
//   assert.isTrue(notes[1].returnText() === "string2")
// }


// testNotesArray();
// addNote();
// testReturnNotes()
