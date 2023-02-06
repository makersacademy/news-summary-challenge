
class NewsModel {

  constructor(){
    this.storyData = [];
  };


  getStoryData() {
    // if (!this.storyData.response) {
    //   return [];
    // }
    return this.storyData
    // return this.storyData.response.results;
  }

  setStoryData(data) {
    this.storyData = data;
  }

}

module.exports = NewsModel;