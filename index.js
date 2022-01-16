const GuardianApi = require('./guardianApi')
const ArticlesModel = require('./articlesModel')
const ArticlesView = require('./articlesView')

const api = new GuardianApi()
const model = new ArticlesModel()
const view = new ArticlesView(model, api)

view.setArticles(() => {
  view.displayArticles();
})
  