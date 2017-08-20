//   function ObjectRequest(){
//     var oReq = new XMLHttpRequest();
//     oReq.addEventListener("load", reqListener);
//     oReq.open("GET", "http://content.guardianapis.com/search?q=cats&api-key=3076bfa9-8478-4c22-afa5-e8e808fbd35b");
//     oReq.send();
//   }
//
//   function reqListener(data){
//     var articles = response.results;//[array of articles]
//     var tittle = response.results[0].webTitle;
//   }

var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

getJSON("http://content.guardianapis.com/search?q=cats&api-key=3076bfa9-8478-4c22-afa5-e8e808fbd35b").then(function(data) {
    alert('Your Json result is:  ' + data.response.result[1]); //used it to debug

    document.getElementById('headline').innerHTML = data.response.result[1]; //display the result in an HTML element
}, function(status) { //error detection....
  alert('Something went wrong.');
});
