import { HeadlinesController } from './controllers/headlines-controller.js'
import { ArticleList } from './article-list.js'

let loadSummaryOnClick = summaryController => {
  window.addEventListener('hashchange', () => {
    var id = window.location.hash.split('/')[1]
    summaryController.initializeSummary(id)
  })
}

let loadHeadlinesOnHomeClick = () => {
  document.getElementById('home').addEventListener('click', () => {
    var headlinesController = new HeadlinesController(new ArticleList())
    headlinesController.initializeHeadlines()
  })
}


export { loadSummaryOnClick, loadHeadlinesOnHomeClick }
