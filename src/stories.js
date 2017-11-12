var Stories = function() {
  this._stories = "";
  this.storyObjects = [];
};

Stories.prototype.getAPI = function() {
  var self = this;
  var xhr = new XMLHttpRequest();
  var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=uk&api-key=test";

  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         self._stories = JSON.parse(xhr.responseText).response.results;
         console.log(self._stories);
         console.log(self._stories[0]);
      }
  };

  xhr.open('GET', url, true);
  xhr.send()
};

Stories.prototype.createStoryObjects = function() {
  for(var i = 0; i < this._stories.length; i++){
    console.log(this._stories[i]);
    console.log(new Story(this._stories[i]));
    var story = new Story(this._stories[i]);
    this.storyObjects.push(story);
    console.log(story);
  }

  console.log(this.storyObjects);
};

// 1. Create index.html with an empty div for articles to go into
// 2. Create App.js JS object
// - pageLoad --> the two functions at the start should be stories.getapi(guardianurl)
// and stories.createStoryObjects()
// - another method called createPage - for loop looping through storyObjects
// `<html>
// <h1 id=${article + i}>${stories.storyObjects[i].headline}</h1>
// </html>`
//
// var app = function(stories = new Stories() ) {
//   stories.getapi(guardianURL)
//   stories.createStoryObjects() ==> returns an array of story objects you can access
//   that now need to be converted into html strings  that you can output to page
//
// }
//
// 3. Event listeners = what happens when you click each article
