const NotesModel = require('./newsModel');
const NotesView = require('./newsView');

const model = new NotesModel();
const view = new NotesView(model);
model.addArticle("this is an example article")

view.displayArticles();
console.log(model.getArticles());