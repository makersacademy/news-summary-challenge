var test = '/example-guardian-api-call.json'
const storyHandler = new StoryHandler(test);
var homePage;

window.addEventListener("DOMContentLoaded",() => {
  storyHandler.renderHeadlines()
    .then(addClickListeners)
    .then(storeHomePage)
})

function addClickListeners() {
  let headlines = document.getElementsByClassName('headline')
  for (let i = 0; i < headlines.length; i++) {
    const headline = headlines[i];
    headline.addEventListener('click', (e) => {
      storyHandler.renderSummary(e.currentTarget.id)
    })
  }
}

function storeHomePage() {
  homePage = document.body.innerHTML
}

