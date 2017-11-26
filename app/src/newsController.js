'use strict';

(function(exports) {

  exports.NewsController = function(body) {

    httpGetAsync(apiLink(), headLine(data));


    function headLine(data) {
      var page = document.getElementById('newstitle1');
      page.text = data.webTitle;
    };

    function apiLink() {
      return "https://content.guardianapis.com/search?api-key=c9dbd6b8-5a56-4a24-af90-57b20036f706";
    };

    function httpGetAsync(theUrl, callback){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
           callback(xmlHttp.responseText);
         }
         xmlHttp.open("GET", theUrl, true); // true for asynchronous
         xmlHttp.send(null);
      }

    return {
      headLine: headLine
    };

  };

})(this);
