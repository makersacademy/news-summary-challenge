const api = new GuardianApi();
const headlinesView = new HeadlinesView();
const ctrl = new HeadlinesController(api, headlinesView);

ctrl.showHeadlines();
