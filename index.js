const NewsApi = require('./newsApi')
const NewsModel = require('./newsModel')
const NewsView = require('./newsView')
const api = new NewsApi()
const model = new NewsModel()
const view = new NewsView(model, api)

api.loadNews((data) => {
    model.setNews(data.response.results);
    view.displayNews()
})


// api.searchNews(() => {
//     model.setNews(data.response.results);
//     view.displayNews()
// })
