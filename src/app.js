import { APIController } from './controllers/api-controller.js'
import { HeadlinesController } from './controllers/headlines-controller.js'
import { SummaryController } from './controllers/summary-controller.js'
import { ArticleList } from './article-list.js'
import * as listeners from './event-listeners.js'

const headlinesController = new HeadlinesController(new ArticleList())
const apiController = new APIController()

apiController.initializeHeadlines(headlinesController)

const summaryController = new SummaryController(headlinesController.headlinesView.articleList)

listeners.loadSummaryOnClick(summaryController, apiController)
listeners.loadHeadlinesOnHomeClick(apiController)
