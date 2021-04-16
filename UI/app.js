document.addEventListener("DOMContentLoaded", function() {

  let newNews = new News();
  let headlineDiv = document.getElementById("headlines");

  let newFetchNews = new FetchNews();

  document.getElementById("loadNews").addEventListener("click", function(){
    newFetchNews.runRequestMain();
  });


  headlineDiv.addEventListener('click', function(event){
       let num = event.target.id;
       newFetchNews.runRequestSummary(num);
       document.getElementById("headlines").style.display = "none";
       document.getElementById("showSummary").style.display ="block";

     });


});
