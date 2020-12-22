const url = `https://content.guardianapis.com/search?q=dominic%20cummings&show-fields=thumbnail,standfirst,body&api-key=c3951010-2dc2-460f-94c9-cbb29a5faaa9`

class StoryController {
  static app = document.getElementById('app');

  constructor() {
    this.dataArray = 0;
    this.storyArray = 0
  }

  showAPI() {
    fetch(url)
      .then(response => response.json())
      .then(dataArray => this.showStoryList(dataArray.response.results));
  }

  showStoryList(dataArray) {
    dataArray.forEach((story, index) => {
      let newStory = new Story(story.webTitle, story.webUrl, story.fields.thumbnail, story.fields.standfirst, story.fields.body, index)
      StoryController.app.innerHTML += newStory.displayStoryList();
    })
    this.dataArray = dataArray;
    console.log(dataArray)
  }

  showStory() {
    return this.dataArray;
  }

}
