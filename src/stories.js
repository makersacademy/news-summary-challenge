'use strict'

class Stories {

  //Sets inital hash
  constructor() {
    this.currentList = []
  }
  
  //Adds page of results to the list
  addPage(results) {
    results.forEach(story => this.addStory(story))
  }
  
  //Creates new story instance for each item
  addStory(item) {
    this.currentList.push(new Story(this.currentList.length, item))
  }
  
}