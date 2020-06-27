const storyHandler = new StoryHandler();
var homePage;

window.addEventListener("DOMContentLoaded",() => {
  storyHandler.renderHeadlines()
  .then(addClickListeners)
  .then(storeHomePage)
  addBackButtonListener();
})

function addBackButtonListener() {
  let listButton = document.getElementById('listButton');
  listButton.addEventListener('click', () => {
    restoreHomePage();
  });
}

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

function restoreHomePage() {
  document.body.innerHTML = homePage
  addClickListeners()
  addBackButtonListener()
}