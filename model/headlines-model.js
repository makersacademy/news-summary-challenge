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
  Headlines.prototype.createNewsItems = function(apiResponse){
    let array = this.newsArray;
    apiResponse.forEach(function(response){
      let newsItem = new NewsItem(response.webTitle, response.webUrl);
      array.push(newsItem);
    })
    this.newsArray = array;
  }

  Headlines.prototype.callGuardianApi = function(path, error){
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  let results = JSON.parse(xhr.responseText).response.results
                  return responseText = results
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
