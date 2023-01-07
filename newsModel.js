class NewsModel { 

  constructor() {
    this.stories = []
  }
  
  allStories() {
    return this.stories;
  }


  add(story) {
    if (typeof story === ('string') || typeof story === ('object') ) {
      this.stories.push(story);
    } else  { 
      throw new Error('Oops! Something went wrong');
    }
  }
}

module.exports = NewsModel;