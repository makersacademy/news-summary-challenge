(function(export){

  function url(){
    this.api = "https://content.guardianapis.com/search?api-key="+GUARDIAN_KEY
  }

  function NewsHeadlines(){
    this.headlines = []
    url()
  }

  NewsHeadlines.prototype.shownews = function () {
    

  };

})(this)
