// Accesses the Guardian API

function API(){
  this.articles = []
}

API.prototype = {

  fetchData: function() {
    let self = this;
    var apiKey = process.env.API_KEY;
    fetch('https://content.guardianapis.com/search?show-fields=all&show-elements&api-key=' + apiKey)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status)
          return
        }
        response.json().then(function(data) {
          console.log("all good")
          self.articles = data.response.results;
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
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