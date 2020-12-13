const url = 'https://content.guardianapis.com/search?q=politics&show-fields=thumbnail&api-key=c3951010-2dc2-460f-94c9-cbb29a5faaa9'

class StoryController {
  static app = document.getElementById('app');

  showAPI() {
    fetch(url)
      .then(response => response.json())
      .then(dataArray => this.showStories(dataArray.response.results));
  }

  showStories(dataArray) {
    console.log(dataArray)
    for (let story of dataArray) {
      let newStory = new Story(story.webTitle, story.webUrl, story.fields.thumbnail)
      console.log(newStory)
      StoryController.app.innerHTML += newStory.displayStory();
    }
  }

}

let controller = new StoryController;
controller.showAPI();
