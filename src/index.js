var news = new News()
var GetSummaryFunc
let headlines_div = document.getElementById('headlines')
let summary_div = document.getElementById('summary')

function clickSummaryBtn(id,GetSummaryFunc = GetSummary) {
  removeSummary()
  removeHeadlines()
  GetSummaryFunc(news.formattedArticles[id].link,function(error,summary){
    if (error === null) {
      renderSummary(news.formattedArticles[id], summary)
    } else {
      renderSummary(news.formattedArticles[id], "Sorry, could not retrieve summary")
    }
  })
}

function goBack() {
  removeSummary()
  renderHeadlines(news.formattedArticles)
}

function removeHeadlines() {
  headlines_div.innerHTML = ""
}

function removeSummary() {
  summary_div.innerHTML = ""
}
