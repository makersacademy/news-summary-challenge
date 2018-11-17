import { HeadlinesController } from './controllers/headlines-controller.js'
import { SummaryController } from './controllers/summary-controller.js'
import { ArticleList } from './article-list.js'
import * as listeners from './event-listeners.js'

var headlinesController = new HeadlinesController(new ArticleList)

headlinesController.initializeHeadlines()

var summaryController = new SummaryController(headlinesController.headlinesView.articleList)

listeners.loadSummaryOnClick(summaryController)
