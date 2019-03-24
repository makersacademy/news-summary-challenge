(function(exports){
  function HeadLineList(HeadLine){
    this.HeadLine = HeadLine ;
    this.headLines = [] ;
  }


  HeadLineList.prototype.getThePoliticalResultsFromGuardianAPI = function(){
    self = this ;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
       str = "<ul>"
       obj.response.results.forEach(function(result){
       	str = str + "<li><div><a href='#"+ result.webUrl+ "'>"+ result.webTitle+"</a></div></li>"
       });
       str = str + "</ul>"
       document.getElementById("app").innerHTML = str;
    }
    };
    xhttp.open("GET","https://content.guardianapis.com/politics?api-key=7e99a648-b400-408c-a64c-445f6c6783a9", true);
    xhttp.send();
  }
  this.HeadLineList = HeadLineList ;
})(this);

 var headLineList = new HeadLineList(HeadLine)
 headLineList.getThePoliticalResultsFromGuardianAPI();
