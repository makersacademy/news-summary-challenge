const url = 'https://content.guardianapis.com/search?q=politics&show-fields=thumbnail,standfirst&api-key=c3951010-2dc2-460f-94c9-cbb29a5faaa9'

class StoryController {
  static app = document.getElementById('app');

  showAPI() {
    fetch(url)
      .then(response => response.json())
      .then(dataArray => this.showStoryList(dataArray.response.results));
  }

  showStoryList(dataArray) {
    console.log(dataArray)
    for (let story of dataArray) {
      let newStory = new Story(story.webTitle, story.webUrl, story.fields.thumbnail, story.fields.standfirst)
      StoryController.app.innerHTML += newStory.displayStoryList();
    }
  }

  // callStoryAPI() {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(dataArray => this.displayStory(dataArray.response.results));
  // }
  //
  // showStory(dataArray) {
  //   for (let story of dataArray) {
  //     let anotherStory = new Story(story.webTitle, story.webUrl, story.fields.thumbnail, story.fields.body)
  //     StoryController.app.innerHTML += anotherStory.displayStory();
  //   }
  // }

}
