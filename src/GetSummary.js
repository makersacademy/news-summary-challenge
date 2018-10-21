(function(exports){
  function GetSummary(articleURL,callback) {
    // const xhr = new XMLHttpRequest();
    // const url = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + articleURL
    // xhr.onreadystatechange = function(){
    //   if (this.readyState == 4 && this.status == 200) {
    //     callback(null, xhr.responseText.text)
    //   } else {
    //     callback("error", null)
    //   }
    // }
    // xhr.open("GET",url,true)
    // xhr.send()
    callback(null,"Summary");
  }

  exports.GetSummary = GetSummary
})(this)
