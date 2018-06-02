(function(exports){

  function Api(){
    this._url = 'https://content.guardianapis.com/'
    this._query = 'search?order-by=newest&show-fields=all&q=theatre%20AND%20stage'
    this._taken = '&api-key=894fe2cc-c811-443a-a4fa-d8e6faeb6f9a'
  };


  Api.prototype.request = function (){

    var url = this._url + this._query + this._taken
    var that = this

    return new Promise(function(resolve, reject){
      var req = new XMLHttpRequest()

      req.open('GET', url)

      req.onload = function() {
        if(req.status === 200) {
          var list = createNews(req.response)
          resolve(list);
        } else {
          reject(Error(req.statusText));
        };
      };

      req.onerror = function() {
        reject(Error("Something went wrong"));
      };

      req.send();
    });
  };

  function createNews(response){
    var newsList = new NewsList()
    var re = JSON.parse(response).response.results
    re.forEach(function(results){
      newsList.add(
        results.fields.headline,
        results.fields.thumbnail,
        results.fields.standfirst,
        results.fields.body
      )
    });
    return newsList
  };

  exports.Api = Api;

})(this)
