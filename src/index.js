"use strict";

;(function() {
  var stories = new Stories();
  var storiesList;
  var aylienUrl = "https://api.aylien.com/api/v1/summarize?url=";


  window.addEventListener("load", function(){
    storiesList = downloadStories();
    addHeadlines();
    addHeadlineClickListeners();
  });

  function downloadStories() {
    var storiesList = stories.storiesList();
    return storiesList;
  };

  function addHeadlines() {
    var headlinesElement = document.getElementById("headlines");
    for(var i = 0; i < storiesList.length; ++i){
      var html = '<li class="headline" id="headline-' + i + '">' + storiesList[i].getHeadline() + '</li>';
      headlinesElement.innerHTML += html;
    }
  };

  function addHeadlineClickListeners() {
    var headlines = document.getElementsByClassName('headline');
    for (var i=0; i<headlines.length; i++){
      addHeadlineClickListener(headline,i);
    }
  };

  function addHeadlineClickListener(headline, i) {
    headline.addEventListener('click', function(even) {
    var elem = document.getElementById('news_summary');
    var fullAylienUrl = aylienUrl + storiesList[i].getWebUrl();
    var aylienResult = aylienApi(fullAylienUrl, function(result){
      elem.innerHTML = result[0];
    }, function(error){
      elem.innerHTML = error;
    });
  }, false);
};

})();
