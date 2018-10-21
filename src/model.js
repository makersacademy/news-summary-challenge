function Model(url) {
  this.data = [];
  this.url = url;
}

Model.prototype.getNews = async function(xml = new XMLHttpRequest(), cb = null) {
  xml.open('GET', this.url, true);
  xml.onreadystatechange = () => {
    if(xml.readyState == 4 && xml.status == 200) {
      var news = JSON.parse(xml.responseText);
      this.parseNews(news)
      if (cb !== null) {
        cb()
      }
    }
  };
  xml.send();

}

Model.prototype.parseNews = function(json) {
  var allStories = json.response.results;
  for (let story of allStories) {
    let parsedStory = {}
    parsedStory.thumbnail = story.fields.thumbnail
    parsedStory.title = story.webTitle
    parsedStory.link = story.webUrl
    this.data.push(parsedStory)
  }
}

Model.prototype.loadNews = async function() {
  try {
    await this.getNews( function() {

    });
    console.log(this.data)
  } catch (error) {
    console.log(error.message);
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Model
}
