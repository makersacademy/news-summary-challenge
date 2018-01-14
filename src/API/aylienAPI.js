function requestToAylienApi(){
  var url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://www.telegraph.co.uk/news/2018/01/10/australian-girl-face-iconic-akubra-hat-commits-suicide-aged/";

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if(this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log(response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

requestToAylienApi();
