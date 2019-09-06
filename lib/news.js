// news class, stores news information from the Guardian API
// converts headline, picture and article into HTML objects

function News(headline, fullStory, image){
  this.headline = headline
  this.fullStory = fullStory
  this.image = image
}

News.prototype = {
  displayHeadline: function() {
    headlineDisplay = document.createElement('h1')
    headlineDisplay.textContent = this.headline
    return headlineDisplay
  }
}