(function(export){

  function url(){
    this.api = "https://content.guardianapis.com/search?api-key="+MyKey
  }

  function NewsSummary(){
    this.headlines = []
    url();
  }

  NewsSummary.prototype.shownews = function () {
    fetch(url()).then(res => {
      return res.json;
    }).then(function data(){
      this.headlines = (data.res.results)
    });
  }

  export.NewsSummary = NewsSummary;

})(this)
