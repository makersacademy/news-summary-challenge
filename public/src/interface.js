var headlines = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-fields=trailText,thumbnail&format=JSON"
var test = "https://content.guardianapis.com/search?api-key=test&show-fields=trailText,thumbnail"

window.onload = function() {
  getHeadlines(test)
}

function getid(obj) {
  const summaryContainer = document.getElementById('summary_container')
  summaryContainer.style.display = "block";
  const headlinesContainer = document.getElementById('headlines_container')
  headlinesContainer.style.display = "none";
  summarise(obj.id)
}

document.getElementById('summary_container').addEventListener("click", function () {
  const summaryContainer = document.getElementById('summary_container')
  summaryContainer.style.display = "none";
  const headlinesContainer = document.getElementById('headlines_container')
  headlinesContainer.style.display = "block";
  summaryContainer.innerHTML = ""
})
