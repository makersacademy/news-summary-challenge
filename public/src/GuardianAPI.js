(function(exports) {
  function GuardianAPI() {

    var articleData = [];
    return {

      fetchArticleData: function(){
        const REQUEST = new XMLHttpRequest();
        const url = 'https://content.guardianapis.com/search?page=1&q=Rugby&api-key=d93e7d23-079a-4f0d-ab7a-ec1583242e9e';

        REQUEST.open("GET", url);
        REQUEST.send();

        REQUEST.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200 ) {
            var response = JSON.parse(REQUEST.response);
            articleData = response.response.results;
          }
        }
      },

      returnArticleData: function() {
        return articleData
      }
    };
  }
  exports.GuardianAPI = GuardianAPI;
})(this);

var guardianAPI = new GuardianAPI();
guardianAPI.fetchArticleData();
setTimeout(function(){ console.log(guardianAPI.returnArticleData()); }, 1000);
