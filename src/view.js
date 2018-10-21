function View(builder = new NodeBuilder()) {
  this.builder = builder;
}

View.prototype.renderNews = async function(newsData, cb = null) {
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

View.prototype.setClickFunctions = function(cb) {
  let self = this
  let all = document.getElementsByTagName('*')
  for (let node of all) {
    if (node.id.includes('title')) {
      this.builder.updateClick(node.id, function() {
        console.log(node.getAttribute('storyurl'))
      })
    }
  }
}

View.prototype.setDivClickFunction = function(cb, id) {
  cb(id)
  console.log("div button clicked")
}


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = View
}
