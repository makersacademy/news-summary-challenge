window.addEventListener("load",function(){
  var controller = new Controller(HeadLineList, SingleHeadListView);
  controller.getThePoliticalResultsFromGuardianAPIByController();
  controller.showTheArticleSummaryByController ();
})
