(function headlineRequest() {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
  httpRequest.send();


function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      alert('There was a problem with the request.');
    }
  }
}
}) ();

// (function(exports) {
//
//     function ApiCall(api) {
//       this.httpRequest = new XMLHttpRequest();
//       this.api = api       //"http://content.guardianapis.com/search?api-key=test"
//       this.responseArray = ""
//
//      ApiCall.prototype.collect = function () {
//         if (!httpRequest) {
//           alert('cannot create an XMLH instance');
//           return false;
//         }
//         this.httpRequest.onreadystatechange = alertContents;
//         this.httpRequest.open('GET', this.api, true);
//         this.httpRequest.send();
//
//         function alertContents(){
//           if(httpRequest.readyState === 4)
//             if(httpRequest.status === 200){
//             request.onload = function() {
//               var response = Json.parse(this.httpRequest.responseText);
//               this.responseArray = response.results
//               console.log(this.responseArray)
//             }else{
//              alert('There is a problem with the request.');
//             }
//            }
//           }
//          }
//        }
//      };
//      exports.ApiCall = ApiCall;
//      }) (this);
