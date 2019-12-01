// unsure of how to make the api work, will need to ask 

// (function(exports) {
//   function Api() {}
//
//   Api.prototype.fetchData = function() {
//       var self = this;
//       var xhr = new XMLHttpRequest();
//       xhr.onload = function() {
//         var request = JSON.parse(xhr.response);
//         self.data = request.response.results;
//       };
//       xhr.open('GET', "https://content.guardianapis.com/search\?section=politics\&show-fields=headline,thumbnail,short-url\&api-key\=4d434884-a275-4c0b-ab5a-2e95fb1f6607");
//       xhr.send();
//     },
//
//     Api.prototype.generateHTML= function() {
//       var html =[]
//       this.data.forEach(function(data) {html.push(`<div class = "title">${data.fields.headline}</div>
//       <a href = ${data.webURL}>
//       <img src = ${data.fields.thumbnail}>`)
//     });
//       (document.querySelector('.app')).innerHTML = html
//     };
//     exports.Api = Api;
// })(this);
