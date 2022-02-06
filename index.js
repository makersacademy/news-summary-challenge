const HeadlineModel = require('./headlineModel');
const HeadlineView = require('./headlineView');
const GuardianApi = require('./guardianApi');

const model = new HeadlineModel();
const view = new HeadlineView(model);
const api = new GuardianApi();

// model.addStory({ "headline":"Pig's seen flying over Billericay" });
// view.displayStories();

api.loadStories((stories) => {
  model.setStories(stories);
  view.displayStories();
});
