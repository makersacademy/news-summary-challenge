(function(exports) {
  function HeadlineController () {
   document.addEventListener("DOMContentLoaded", function(event){
     headlinecontroller = new HeadlineController();
     headlinecontroller.getHTML();
   })
  };

  HeadlineController.prototype.getHTML = function () {
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("headlines").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "", true);
  xhttp.send();

  }
 exports.HeadlineController = HeadlineController;
})(this);
