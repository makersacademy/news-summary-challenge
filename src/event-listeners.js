function loadSummaryOnClick (summaryController) {
  window.addEventListener('hashchange', () => {
    var id = window.location.hash.split('/')[1]
    summaryController.initializeSummary(id)
  })
}

function loadHeadlinesOnHomeClick (headlinesController) {
  document.getElementById('home').addEventListener('click', () => {
    headlinesController.initializeHeadlines()
  })
}

export { loadSummaryOnClick, loadHeadlinesOnHomeClick }
