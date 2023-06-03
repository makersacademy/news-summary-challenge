const NewsClient = require("./newsClient");
const NewsModel = require("./newsModel");

class NewsView {
  constructor(model = new NewsModel, client = new NewsClient) {
    this.model = model;
    this.client = client;
    const searchButtonEl = document.querySelector('#search-button');
    const searchInputEl = document.querySelector('#search-input');

    searchButtonEl.addEventListener('click', () => {
      let query = searchInputEl.value
      this.searchNews(query);
      searchInputEl.value = null
    });
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
      // sets headline and link subelement
      const newStoryHeadline = document.createElement('p')
      const linkToStory = document.createElement('a')
      newStoryHeadline.className = 'story_headline'
      linkToStory.className = 'story_link'
      linkToStory.textContent = story.headline;
      linkToStory.href = story.webUrl;
      newStoryHeadline.appendChild(linkToStory)

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

  searchNews(query) {
    return this.client.fetchNewsStories((storiesArray) => {
      this.model.setStories(storiesArray);
      this.displayNews();
    }, query);
  }
}

module.exports = NewsView;