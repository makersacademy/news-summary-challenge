import { HeadlinesController } from './controllers/headlines-controller.js'
import { HeadlinesList } from './headlines-list.js'

var headlinesList = new HeadlinesList
var headlinesController = new HeadlinesController(headlinesList)

headlinesController.initializeHeadlines()
