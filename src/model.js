function Model(url) {
  this.data = [];
  this.summary = null;
  this.url = url;
}

Model.prototype.getNews = async function(cb=null) {
  let self = this
  xml = new XMLHttpRequest()
  xml.open('GET', this.url, true);
  xml.onreadystatechange = async function() {
    if(xml.readyState == 4 && xml.status == 200) {
      var news = JSON.parse(xml.responseText);
      await self.parseNews(news)
      if (cb !== null) {
        cb(self)
      }
    }
  };
  xml.send();
}

Model.prototype.parseNews = async function(json) {
  var allStories = json.response.results;
  for (let story of allStories) {
    let parsedStory = {}
    parsedStory.id = story.id
    parsedStory.thumbnail = story.fields.thumbnail
    parsedStory.title = story.webTitle
    parsedStory.link = story.webUrl
    this.data.push(parsedStory)
  }
}

Model.prototype.loadNews = async function(cb=null) {
  try {
    await this.getNews(cb);
  } catch (error) {
    console.log(error.message);
  }
}

Model.prototype.getSummary = async function(url, cb=null) {
  let self = this
  var xhr = new XMLHttpRequest();
  var queryUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + url
  xml.open("GET", queryUrl, true);
  xml.onreadystatechange = async function() {
    if(xml.readyState == 4 && xml.status == 200) {
      var summary = JSON.parse(xml.responseText);
      await self.parseSummary(summary)
      if (cb !== null) {
        cb(self)
      }
    }
  };
  xml.send();
};

Model.prototype.parseSummary = async function(json) {
  this.summary = json.sentences
}

Model.prototype.loadSummary = async function(url, cb=null) {
  try {
    await this.getSummary(url, cb);
  } catch (error) {
    console.log(error.message);
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Model
}
