document.addEventListener('DOMContentLoaded',function() {
  it('is able to query the api and return a result', function () {
    const result;
    try {
      result = await getApi()
    } catch (error) {
      
    } finally {

    }
})
});


// it('making a note in the notebook stores a note in the notebook', function () {
//   var output
//   notebook.makeNote('buh')
//   expect(notebook.thingsToRemember[0].content).toEqual('buh')
// })


// it(' should be able to give me all the notes in the notebook pt 1', function () {
//   var notebook = new Notebook;
//   for (let index = 0; index < 5; index++) {
//       notebook.makeNote(`note number:` + index);        
//   }

//   expect(notebook.getNotes()[0].content).toEqual('note number:0')
// })

// it(' should be able to give me all the notes in the notebook pt 2', function () {
//   var notebook = new Notebook;
//   for (let index = 0; index < 3; index++) {
//       notebook.makeNote(`note number:` + index);        
//   }
//   expect(notebook.getNotes()[notebook.thingsToRemember.length - 1].content).toEqual('note number:4')
// })