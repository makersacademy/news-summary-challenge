(function headlineRequest() {
  httpRequest = new XMLHttpRequest();

  var url = "https://content.guardianapis.com/search?api-key=a1f65ba3-b410-4f5e-814e-dbfec51b9634"
  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', url);
  httpRequest.send();


function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      var data = httpRequest.responseText
      var parseddata = JSON.parse(data)
      console.log(parseddata.response.results)
      var contentArray = parseddata.response.results
      // document.getElementById('app').innerHTML = parseddata.response.results
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
