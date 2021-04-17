document.addEventListener("DOMContentLoaded", function() {

  let newNews = new News();
  let newFetchNews = new FetchNews();

  let headlineDiv = document.getElementById("headlines");
  let buttonDiv1 = document.getElementById("loadNews");
  let buttonDiv2 = document.getElementById("backToNews")
  let buttonDiv = document.getElementById("testingId");


  buttonDiv1.addEventListener("click", function(){
    buttonDiv1.style.display = "none";
    newFetchNews.runRequestMain();
  });


  // function showHideButton(){
  //   if (buttonDiv2.style.display === "none") {
  //     buttonDiv2.style.display = "block";
  //   } else if (buttonDiv2.style.display === "block") {
  //     buttonDiv2.style.display = "none";
  //   }
  // }

  buttonDiv2.addEventListener('click', function(event){
       backToHeadlines();
  });

  headlineDiv.addEventListener('click', function(event){
       let num = event.target.id;
       newFetchNews.runRequestSummary(num);
       document.getElementById("headlines").style.display = "none";
       document.getElementById("showSummary").style.display ="block";
       document.getElementById("backToNews").style.display = "block";
          });
     });

  function backToHeadlines(){
     document.getElementById("headlines").style.display = "grid";
     document.getElementById("showSummary").style.display = "none";
     document.getElementById("loadNews").style.display = "none";
     document.getElementById("backToNews").style.display = "none";
  }
