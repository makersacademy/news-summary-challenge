"use strict";

;(function() {

  var storiesList;

  window.addEventListener("load", function(){
    storiesList = Stories.downloadStories();
    addHeadlines();
    addHeadlineClickListeners();
  });

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
      addHeadlineClickListener(headlines[i], i);
    }
  };

  function addHeadlineClickListener(headline, i) {
    headline.addEventListener('click', function(even) {
    var elem = document.getElementById('news_summary');
    var fullAylienUrl = Settings.aylienURL + storiesList[i].getWebUrl();
    var aylienResult = aylienAPI(fullAylienUrl, function(result){
      elem.innerHTML = result.sentences[0];
    }, function(error){
      elem.innerHTML = error;
    });
  }, false);
};

})();
