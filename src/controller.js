(function(exports){
  function Controller(HeadLineList, SingleHeadListView){
    this.HeadLineList = HeadLineList ;
    this.SingleHeadListView = SingleHeadListView ;
  }

  Controller.prototype.getThePoliticalResultsFromGuardianAPIByController = function(){
    var headLineList = new this.HeadLineList;
    headLineList.getThePoliticalResultsFromGuardianAPI();
  }

  Controller.prototype.showTheArticleSummaryByController = function(){
    var singleHeadListView = new this.SingleHeadListView;

    singleHeadListView.showTheArticleSummary();
  }
  this.Controller = Controller ;
})(this);
