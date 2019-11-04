document.addEventListener('DOMContentLoaded', function () {
  var guardianAPI = new GuardianAPI();
  guardianAPI.fetchArticleData();
  setTimeout(function(){
    console.log(guardianAPI.returnArticleData());
  }, 500);
    // on loading webpage; launches a:
    var controller = new Controller;
});


    // var guardianAPI = new GuardianAPI();
    // guardianAPI.fetchArticleData();
    // setTimeout(function(){ console.log(guardianAPI.returnArticleData()); }, 1000);
