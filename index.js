const ArticlesModel = require('./articlesModel')
const ArticlesClient = require('./articlesClient')
const ArticlesView = require('./articlesView')

const model = new ArticlesModel();
const client = new ArticlesClient();
const view = new ArticlesView(model, client)

console.log('Testing')
