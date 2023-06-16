class NewsModel { 

  constructor() {
    this.stories = []
  }
  
  // This method returns all story objects stored in the model
  allStories() {
    return this.stories;
  }

  // This method adds new story objects to the model
  add(story) {
    if (typeof story === ('string') || typeof story === ('object') ) {
      this.stories.push(story);
    } else  { 
      throw new Error('Oops! Something went wrong');
    }
  }

  // This method sets the list of stories in the model to its argument 
  setStories(stories) {
    this.stories = stories
    console.log(this.stories);
  }
}

module.exports = NewsModel;