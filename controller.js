(function(exports) {

  function Controller() {
    }

 Controller.prototype.loadDoc = function() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
  var myObj = JSON.parse(this.responseText);
  var text = myObj.response.content.fields.body
  document.getElementById("demo").innerHTML = text
  };

  xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/2018/oct/21/conservatives-must-hold-nerve-despite-brexit-jitters-says-raab?show-fields=body", true);
  xhttp.send();
}

exports.Controller = Controller;
})(this);
