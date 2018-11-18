(function(exports) {
  //
  // function url(){
  //   return this.guardianapis = "https://content.guardianapis.com/search?api-key="+MyKey
  // }

  function NewsSummary(){
    this.allheadlines = []
    this.guardianapis = "https://content.guardianapis.com/search?api-key="+MyKey
  }

  NewsSummary.prototype.shownews = function () {
    fetch(this.guardianapis).then(res => {
    return res.json();
  }).then(data => {
    this.allheadlines = (data.res.results);
  });
  // .catch(function(error){
  //   console.log(JSON.stringify(error));
  // });
}

  exports.NewsSummary = NewsSummary;

})(this)
