(function (exports){

  function NewsController(newsSummary = NewsSummaryModel, newsSummaryView = NewsSummaryView){
    this.newsSummary = newsSummary;
    this.newsSummaryView = newsSummaryView;
  };


  exports.NewsController = NewsController

})(this);