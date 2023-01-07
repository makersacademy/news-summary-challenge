class NewsView {

  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container')
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
    })
    console.log(this.mainContainerEl);
  }
  
}

module.exports = NewsView;