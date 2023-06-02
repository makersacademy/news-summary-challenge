const NewsClient = require("./newsClient");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");


const model = new NewsModel;
const client = new NewsClient;
const view = new NewsView(model, client);


// model.setStories([
//   {
//     webUrl: 'fake url',
//     headline: 'fake headline ',
//     byline: 'nobody',
//     thumbnailUrl: 'an even more fake url'
//   },
//   {
//     webUrl: 'a very fake url',
//     headline: 'fake headline: the return',
//     byline: 'who?',
//     thumbnailUrl: 'the fakest url'
//   }
// ]);

// view.displayNews();

view.displayNewsFromApi();