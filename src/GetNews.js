(function(exports){
  function GetNews(callback) {
    // const xhr = new XMLHttpRequest();
    // const url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail'
    // xhr.onreadystatechange = function(){
    //   if (this.readyState == 4 && this.status == 200) {
    //
    //     callback(null, xhr.responseText)
    //   } else {
    //     callback("error", null)
    //   }
    // }
    // xhr.open("GET",url,true)
    // xhr.send()

    callback(null,JSON.stringify(mockResult));
  }

  exports.GetNews = GetNews
})(this)
