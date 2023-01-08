class NewsView {

  constructor(client, model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container')
    this.searchInputEL = document.querySelector('#search-input')
    this.client = client
    const buttonEl = document.querySelector('#submit');
    // Add event listener
    document.addEventListener('DOMContentLoaded', () => {
      const searchForm = document.querySelector('#search-form');
      document.getElementById("search-form").addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Form submitted!');
        const search = document.querySelector('#search-input').value
        console.log(search)
        this.submitSearch(search);
      });
    });
    
  }
 
  submitSearch(searchTerm) {
    this.client.setSearchTerm()
    this.displayUserSearch();
  }

  displayStories() {
    // Clear any exisiting stories 
    this.clearStories();
    // Get stories from model
    const stories = this.model.allStories();
    // For each story, create an append a new element on the main container
    stories.forEach(story => {
      const storyElement = this.buildStoryElement(story);
      this.mainContainerEl.append(storyElement);
    })
  }
  
  clearStories() { 
    const stories = document.querySelectorAll('.story');
    stories.forEach(story => story.remove())

  }
  buildStoryElement(story) {
    const headlineEl = this.buildHeadlineEl(story);
    const imageEl = this.buildImageEl(story);
    const storyElement = this.createStoryElement(headlineEl);
    const standfirstEl = this.buildStandfirstEl(story);
    storyElement.append(headlineEl,imageEl, standfirstEl);
    return storyElement;
  }

  buildHeadlineEl(story) {
    const headlineEl = document.createElement("h2")
    headlineEl.classList.add("headline");
    headlineEl.innerHTML = `<a href=${story.webUrl}>${story.headline}</a>`; 
    return headlineEl
  }

  buildStandfirstEl(story) {
    const standfirstEl = document.createElement("div")
    standfirstEl.classList.add("standfirst");
    standfirstEl.innerHTML = story.standfirst;
    return standfirstEl
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
      storyObject.webUrl = (story.webUrl)
      storyObject.standfirst = (story.fields.standfirst)
      todaysStories.push(storyObject)
    });

    this.model.setStories(todaysStories); 
    this.displayStories();
    } );

  }

  displayUserSearch() {

    // Create an array for all the new stories
    const foundStories = []

    //Call the fetchStories method on the client
    this.client.searchStories((data) => {

    // Create an object containing headline and image and add to each story to the model
    data.response.results.forEach((story) => {
      const storyObject = {}
      storyObject.headline = (story.fields.headline)
      storyObject.thumbnail = (story.fields.thumbnail)
      storyObject.webUrl = (story.webUrl)
      storyObject.standfirst = (story.fields.standfirst)
      foundStories.push(storyObject)
    });

    this.model.setStories(foundStories); 
    this.displayStories();
    } );

  }
  
}

module.exports = NewsView;