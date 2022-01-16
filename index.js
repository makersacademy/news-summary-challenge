const NewsApi = require('./newsApi.js');
const NewsModel = require('./newsModel.js');
const NewsView = require('./newsView.js');

api = new NewsApi();
api.loadNews()

model = new NewsModel();
view = new NewsView(model);

api.loadNews((newsData) => {
  (newsData.response.results).forEach(element => {
    model.addHeadline({"headline" : element.webTitle, "thumbnail" : element.fields.thumbnail, "body" : element.fields.body});
    
  });
  view.displayNewsSummary();
})

console.log(model.getHeadlines())
