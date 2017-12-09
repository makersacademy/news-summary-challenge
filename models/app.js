var control = (function() {

var showTopStoriesToday = document.getElementById("show-top-stories");
var topStory1Headline = document.getElementById("top-story-1").parentElement.removeChild('link');
var showMore = document.getElementById("more");


  var init = function (){
    showTopStoriesToday.addEventListener("click", function(){
      form.style.display = "block";
      console.log(article)
    });
    var showMore = function (){
      showMore.addEventListener("click", function(){
        more.style.display = "block";
        console.log(more);
      });

return {
  init: init
};

}());
control.init();
