const HeadlineModel = require('./headlineModel');
const HeadlineView = require('./headlineView');

const model = new HeadlineModel();
const view = new HeadlineView(model);

model.addStory({ "headline":"Pig's seen flying over Billericay" });
view.displayStories();