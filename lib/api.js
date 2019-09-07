// Accesses the Guardian API

function API(){
  this.articles = "hi"
}

API.prototype = {

  fetchData: function() {
    let self = this;
    // var apiKey = process.env.API_KEY;
    var apiKey = "fbbef7a3-866b-4eeb-95fa-e3c5dc56e4d4"
    fetch('https://content.guardianapis.com/search?show-fields=all&show-elements&api-key=' + apiKey)
    .then(
      function(response) {
        response.json().then(function(data) {
          console.log("all good")
          self.articles = data.response.results;
        });
      }
    )
  },

  getHeadline: function(index) {
    return this.articles[index].fields.headline
  },

  getBody: function(index) {
    return this.articles[index].fields.bodyText
  },

  getImage: function(index) {
    return this.articles[index].fields.thumbnail
  }
}