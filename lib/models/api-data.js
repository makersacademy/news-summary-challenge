(function(exports) {
  function APIData() {
  }

  APIData.prototype.makeRequest = function(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send();
    return JSON.parse(xmlHttp.responseText);
  }

  exports.APIData = APIData;
})(this);

var getHttp = new APIData()
var info = getHttp.makeRequest('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=uk&from-date=2020-03-08&show-fields=thumbnail,body%27')

// (function(exports) {
//   function APIData() {
//     this.content = []
//   }

//   APIData.prototype = {
//     getPosts: function() {
//       fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=uk&from-date=2020-03-08&show-fields=thumbnail,body%27')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.response.results)
//         // self.content = data.response.results
//         return data.response.results
//       })
    
//     // console.log("this:")
//     // console.log(this)
//     // console.log("this.content: ")
//     // console.log(this.content)
//     }
//   }  
  
//   exports.APIData = APIData
// })(this)

// var apiData = new APIData()
// var info = apiData.getPosts()
// console.log(info)
