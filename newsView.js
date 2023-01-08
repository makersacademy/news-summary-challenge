class NewsView {

  constructor(client, model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container')
    this.client = client
  }

  displayStories() {

    // Get stories from model
    const stories = this.model.allStories();

    // For each story:
    
    // For each story, create an append a new element on the main container
    stories.forEach(story => {
      const storyElement = this.buildStoryElement(story);
      this.mainContainerEl.append(storyElement);
      // const headlineEl = document.createElement('div')
      // headlineEl.innerText = story
      // headlineEl.className = 'headline'
    })


  }

  buildStoryElement(story) {
    const headlineEl = this.buildHeadlineEl(story);
    const imageEl = this.buildImageEl(story);
    const storyElement = this.createStoryElement(headlineEl);
    storyElement.append(headlineEl,imageEl);
    return storyElement;
  }

  buildHeadlineEl(story) {
    const headlineEl = document.createElement("h2")
    headlineEl.classList.add("headline");
    headlineEl.innerText = story.headline;
    return headlineEl
  }

  buildImageEl(story) {
    const imageEl = document.createElement("img")
    imageEl.classList.add("thumbnail");
    imageEl.src = story.thumbnail;
    return imageEl;
  };

  createStoryElement = () => {
    const storyEl = document.createElement("div");
    storyEl.classList.add("story");
    return storyEl;
  };
  
  displayStoriesFromApi() {

    // Create an array for all the new stories
    const todaysStories = []

    //Call the fetchStories method on the client
    this.client.fetchStories((data) => {

    // Create an object containing headline and image and add to each story to the model
    data.response.results.forEach((story) => {
      const storyObject = {}
      storyObject.headline = (story.fields.headline)
      storyObject.thumbnail = (story.fields.thumbnail)
      todaysStories.push(storyObject)
    });

    this.model.setStories(todaysStories);
    
    this.displayStories();
    } );

  }
  
}

module.exports = NewsView;