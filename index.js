const NewsModel = require('./newsModel');
const NewsView = require('./newsView');
const NewsClient = require('./newsClient');

const client = new NewsClient();
const model = new NewsModel();
const view = new NewsView(model, client);



view.displayStoriesFromApi();




// client.loadNotes((notes) => {
//   // This will be executed if notes are loaded correctly from the server
//   model.setNotes(notes);
//   view.displayNotes();
// }, () => {
//   // This will be executed if there's an error
//   view.displayError();
// });


