document.addEventListener("DOMContentLoaded", function() {

  let newNews = new News();
  let newFetchNews = new FetchNews();

  let headlineDiv = document.getElementById("headlines");
  let headlineDiv2 = document.getElementById("headlineHide");
  let buttonDiv1 = document.getElementById("loadNews");
  let buttonDiv2 = document.getElementById("backToNews")
  let buttonDiv = document.getElementById("buttonId");
  let title = document.getElementById("newsTitle");
  let oneHeadlineDiv = document.getElementsByClassName("oneHeadlineDiv");

  buttonDiv1.addEventListener("click", function(){
    buttonDiv1.style.display = "none";
    newFetchNews.runRequestMain(function(){
      document.querySelectorAll(".newsTitle").forEach(function(item) {
        console.log('honk');
        item.addEventListener('click', function(event){
          showSummary();
        });
      });
    });
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

  function showSummary(){
    let num = event.target.id;
    newFetchNews.runRequestSummary(num, function(){
      document.getElementById("headlines").className = "headlineHide"
      document.getElementById("showSummary").style.display ="block";
      document.getElementById("backToNews").style.display = "inline-block";
      title.innerHTML = "- summary -";
    });
  }

  function backToHeadlines(){
    // document.getElementById("headlines").style.display = "grid";
    document.getElementById("newsTitle").innerHTML = "- The latest headlines -";
    document.getElementById("headlines").className = "none"
    document.getElementById("showSummary").style.display = "none";
    document.getElementById("loadNews").style.display = "none";
    document.getElementById("backToNews").style.display = "none";
  }
});
