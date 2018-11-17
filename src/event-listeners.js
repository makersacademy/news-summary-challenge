function loadSummaryOnClick (summaryController) {
  window.addEventListener('hashchange', () => {
    var id = window.location.hash.split('/')[1]
    summaryController.initializeSummary(id)
  })
}

export { loadSummaryOnClick }
