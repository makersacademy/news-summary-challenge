const { NewsClient } = require('./newsClient')
const { NewsView } = require('./newsView')

const client = new NewsClient()
const view = new NewsView(client)

const callback = (data) => {
  console.log(data)
}
const errorHandler = (error) => {
  console.log(error)
}

// client.loadArticles(callback, errorHandler)
view.displayArticles()