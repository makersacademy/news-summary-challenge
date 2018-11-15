// export {}
// import { key } from '../key.js'

// let getNewsApi = () => {
//   fetch''

(function(exports){
  function NewsController() {}

  NewsController.prototype.getAPI = function() {
    fetch('https://content.guardianapis.com/search?api-key=b5a397fe-7a8b-47c4-9727-abc75851d690')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        var results = myJson.response.results;
          var string = "";
          for (var i = 0; i < results.length; i++) {
            string += (results[i].id + ", ");
          }
          document.getElementById('app').innerHTML = string.slice(0, -2);
        }
  );};

  exports.NewsController = NewsController;
})(this);
