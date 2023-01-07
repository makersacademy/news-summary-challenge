class NewsView {

  constructor(client, model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container')
    this.client = client
  }

  displayStories() {

    // Get stories from model
    const stories = this.model.allStories();
    
    // For each story, create an append a new element on the main container
    stories.forEach(story => {
      const headlineEl = document.createElement('div')
      headlineEl.innerText = story
      headlineEl.className = 'headline'
      this.mainContainerEl.append(headlineEl);
      console.log(this.mainContainerEl)
    })
  
  }
  
  displayStoriesFromApi() {

    // Create an array for all the new stories
    const todaysStories = []

    //Call the fetchStories method on the client
    this.client.fetchStories((data) => {

    // Add the headline of each story to the model
    data.response.results.forEach((story) => {
      todaysStories.push(story.fields.headline)
    });

    this.model.setStories(todaysStories);
    
    this.displayStories();
    } );

  }
  
}

module.exports = NewsView;