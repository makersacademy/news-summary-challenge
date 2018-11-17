import { HeadlinesController } from './controllers/headlines-controller.js'
import { ArticleList } from './headlines-list.js'

var articleList = new ArticleList()
var headlinesController = new HeadlinesController(articleList)

headlinesController.initializeHeadlines()
