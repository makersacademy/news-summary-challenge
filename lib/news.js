// news class, stores news information from the Guardian API
// converts headline, picture and article into HTML objects

function News(headline, fullStory, image){
  this.headline = headline
  this.fullStory = fullStory
  this.image = image
}

News.prototype = {
  displayHeadline: function() {
    headlineDisplay = document.createElement('h1');
    headlineDisplay.textContent = this.headline;
    return headlineDisplay;
  },

  displayStory: function() {
    storyDisplay = document.createElement('p');
    storyDisplay.textContent = this.fullStory;
    return storyDisplay;
  },

  displayImage: function() {
    imageDisplay = document.createElement('img');
    imageDisplay.setAttribute('src', this.image);
    return imageDisplay
  },

  displayLink: function(index) {
    linkDisplay = document.createElement('a');
    linkDisplay.setAttribute('id', index)
    linkDisplay.addEventListener('click', function() {
      showArticle(index)
    })
    linkDisplay.textContent = this.headline;
    return linkDisplay;
  },
}