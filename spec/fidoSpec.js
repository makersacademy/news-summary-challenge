document.addEventListener('DOMContentLoaded',function() {
  it('is able to query the api and return a result', function () {
    var worked = false
    var result = getApi()
    setTimeout(function(){ 
      if(result) worked = true;
      console.log(worked);
      console.log(result);
      expect(worked).toEqual(true)
      }, 3000);
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