"use strict";

;(function() {

  var storiesList;

  window.addEventListener("load", initialisePage);

  function initialisePage (){
    storiesList = Stories.downloadStories();
    addHeadlines();
    addHeadlineClickListeners();
  }

  function addHeadlines() {
    var headlinesElement = document.getElementById("headlines");
    for(var i = 0; i < storiesList.length; ++i){
      var html = `<div class="headline" id="headline-${i}"><img class="headline-thumbnail" src="${storiesList[i].getThumbnail()}"> ${storiesList[i].getHeadline()}</div>`;
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
