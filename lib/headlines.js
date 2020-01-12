'use strict'

function Headlines(){};

Headlines.prototype = (function(){

  var headline;

  function loadDoc(path){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
        let jSonParsed = JSON.parse(this.responseText);
        let list = "<ul>"
        for(var i = 0; i < jSonParsed.response.results.length; i++){
          list += `<li>${jSonParsed.response.results[i].webTitle}</li>`
        }
        document.getElementById('headlineList').innerHTML = list + "</ul>"
      }
    }
    xhr.open("GET", path, true)
    xhr.send();
  }

  function show(path = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search'){
    loadDoc(path);
  }

  return {
    show: show
  }

})();
