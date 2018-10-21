function View(builder = new NodeBuilder()) {
  this.builder = builder;
}

View.prototype.renderNews = function(newsData, cb=null) {
  for (let newsItem of newsData) {

    // set names of elements
    let newsId = newsItem.id
    let newsDivId = 'newsStory' + newsId

    // create div
    let newsDiv = this.builder.createNode('div', newsDivId, 'newsContainer')
    this.builder.addNode(newsDiv, 'newsAnchor');

    // add title
    let newsTitle = this.builder.createNode('a', 'title' + newsId);
    this.builder.addNode(newsTitle, newsDivId)
    this.builder.updateText('title' + newsId, newsItem.title);
    this.builder.addAttribute('title' + newsId, 'href', '#' + newsItem.link);
    this.builder.addAttribute('title' + newsId, 'storyUrl', newsItem.link);

    // add image
    let newsImage = this.builder.createNode('img', 'img' + newsId)
    this.builder.addNode(newsImage, newsDivId)
    this.builder.addAttribute('img' + newsId, 'src', newsItem.thumbnail)
  }
  if (cb !== null ) {
    cb()
  }
}

View.prototype.renderSummary = function(url, summary, data, cb=null) {
  let storyData;
  let summaryAnchorId = 'individualStory';

  for (let story of data) {
    if (story.link === url) {
      storyData = story
      console.log(story)
    }
  }

  // add back link
  let backLink = this.builder.createNode('a', 'backToSummary');
  this.builder.addNode(backLink, summaryAnchorId)
  this.builder.updateText('backToSummary', 'Back to the summary page');
  this.builder.addAttribute('backToSummary', 'href', '#');

  // add title
  let storyTitle = this.builder.createNode('h2', 'title');
  this.builder.addNode(storyTitle, summaryAnchorId)
  this.builder.updateText('title', storyData.title);

  // add image
  let storyImage = this.builder.createNode('img', 'image')
  this.builder.addNode(storyImage, summaryAnchorId)
  this.builder.addAttribute('image', 'src', storyData.thumbnail)

  // add sentences
  for (let sentence in summary) {
    let sentenceNode = this.builder.createNode('p', sentence)
    this.builder.addNode(sentenceNode, summaryAnchorId)
    this.builder.updateText(sentence, summary[sentence]);
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = View
}
