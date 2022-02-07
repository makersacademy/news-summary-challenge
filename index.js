const HeadlineModel = require('./headlineModel');
const GuardianApi = require('./guardianApi');
const HeadlineView = require('./headlineView');

const model = new HeadlineModel();
const api = new GuardianApi();
const view = new HeadlineView(model, api);

api.loadStories((stories) => {
  model.setStories(stories);
  view.displayStories();
});
