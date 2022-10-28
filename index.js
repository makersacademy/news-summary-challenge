const NewsModel = require('./newsModel');
const NewsView = require('./newsView');
const model = new NotesModel();
const view = new NotesView(model);


console.log('hello, world')
// console.log(model.getNotes())

// model.addNote('This is an example note')
// view.displayNotes()