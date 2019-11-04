// on loading webpage;
document.addEventListener('DOMContentLoaded', function () {

  var guardianAPI = new GuardianAPI();
  guardianAPI.fetchArticleData();

  setTimeout(function(){
    var articleData = guardianAPI.returnArticleData();
    var controller = new Controller(articleData)
  }, 500);

});

    // var guardianAPI = new GuardianAPI();
    // guardianAPI.fetchArticleData();
    // setTimeout(function(){ console.log(guardianAPI.returnArticleData()); }, 1000);
