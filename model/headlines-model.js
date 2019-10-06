(function(exports){
  function Headlines() {
    this.newsArray = [];
    // controller will need to
    // call guardian api
    // create news item for each result item in the json response
    // push news item into the newsArray

  };
  Headlines.prototype.displayArray = function(){
    return this.newsArray
  }
  Headlines.prototype.createNewsItemArray = function(){

  }

  Headlines.prototype.callGuardianApi = function(path, success, error){
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200 && success) {
                  this.apiResults = JSON.parse(xhr.responseText).response.results
                  console.log(this.apiResults)
                  return responseText = this.apiResults
              } else {
                  if (error)
                      error(xhr);
              }
          }
      };
      xhr.open("GET", path, false);
      xhr.send();
  }
  exports.Headlines = Headlines
})(this);
