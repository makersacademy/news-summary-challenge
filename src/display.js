// 'use strict';
(function(exports) {
  function display(newsList) {
    var content = document.getElementById('content');
    var newsListView = new NewsListView(newsList);
    content.innerHTML = newsListView.htmlParser();
    
    window.addEventListener("hashchange", function(){
      summary(newsList);
    });

    function showStory() {
      var newsStoryID = window.location.hash.split('/')[1];
      var newsStory = newsList._newsStories[newsStoryID - 1];
      var newsStoryView = new NewsStoryView(newsStory);
      document.getElementById("content").innerHTML = newsStoryView.htmlParser();
      document.getElementById("back").addEventListener("click", function() {
        content.innerHTML = newsListView.htmlParser();
        window.location.href = "http://localhost:8080/";
      });
    };

    function summary() {
      var newsStoryID = window.location.hash.split('/')[1];
      var newsStory = newsList._newsStories[newsStoryID - 1];
      fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url= ${newsStory._url}`)
      .then((resp) => resp.json())
      .then(function(data) {
        document.getElementById("content").innerHTML = `<div><h2> ${newsStory.headline()} </h2><button type="button" id="back">Back</button><br><img src="${newsStory.image()}"><p> ${data.text} </p></div>`;
        document.getElementById("back").addEventListener("click", function() {
          window.location.href = "http://localhost:8080/";
        });
      })
    };
  } exports.display = display;
    // exports.showStory = showStory;
    // exports.summary = summary; 
})(this)




// makeUrlChangeShowAnimalForCurrentPage();

// function makeUrlChangeShowAnimalForCurrentPage() {
// window.addEventListener("hashchange", showAnimalForCurrentPage);
// };

// function showAnimalForCurrentPage() {
// showAnimal(getAnimalFromUrl(window.location));
// };

// function getAnimalFromUrl(location) {
// return location.hash.split("#")[1];
// };

// function showAnimal(animal) {
// document
// .getElementById("animal")
// .innerHTML = animal;
