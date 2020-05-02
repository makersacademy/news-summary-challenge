var test = '/example-guardian-api-call.json'
var storyHandler = new StoryHandler(test);

window.addEventListener("DOMContentLoaded",() => {
  storyHandler.renderHeadlines()
})
