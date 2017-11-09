var control = (function() {

var showTopStoriesToday = document.getElementById("show-top-stories");

  var init = function (){
    showTopStoriesToday.addEventListener("click", function(){
      form.style.display = "block";
      console.log(article)
});

return {
  init: init
};

}());
control.init();
