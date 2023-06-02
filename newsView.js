const NewsClient = require("./newsClient");
const NewsModel = require("./newsModel");

class NewsView {
  constructor(model = new NewsModel, client = new NewsClient) {
    this.model = model;
    this.client = client;
  }

  displayNews() {
    // removes old story elements from page
    const oldStoryDisplay = document.querySelectorAll('div.story');
    oldStoryDisplay.forEach((oldStory) => {
      oldStory.remove();
    })
    // gets stories in model
    const storyArray = this.model.getStories();
    // creates elements for each story
    storyArray.forEach((story) => {
      const newStory = document.createElement('div');
      newStory.className = 'story';
      // sets image subelement
      const newStoryImage = document.createElement('img');
      newStoryImage.className = 'story_image'
      newStoryImage.src = story.thumbnailUrl;

      newStory.appendChild(newStoryImage);
      // adds a line break
      newStory.append(document.createElement('br'));
      // sets headline and link subelement
      const newStoryHeadline = document.createElement('a')
      newStoryHeadline.className = 'story_headline'
      newStoryHeadline.textContent = story.headline;
      newStoryHeadline.href = story.webUrl;

      newStory.appendChild(newStoryHeadline);
      // appends story to main container
      document.querySelector('#main-container').append(newStory);
    });
  }

  displayNewsFromApi() {
    return this.client.fetchNewsStories((storiesArray) => {
      this.model.setStories(storiesArray);
      this.displayNews();
    });
  }
}

module.exports = NewsView;