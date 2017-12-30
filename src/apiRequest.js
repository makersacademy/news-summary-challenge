// getNews = function(){
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world');
//   xhr.onload = function() {
//     if (xhr.status === 200) {
//
//       var data = JSON.parse(xhr.responseText)
//       array = []
//       for (var i = 0; i < 10; i++){
//
//          array.push([data.response.results[i].webTitle, data.response.results[i].webUrl]) ;
//       }
//     }
//     else {
//       alert('Request failed.  Returned status of ' + xhr.status);
//     }
//     toView(render(array))
//   };
//   xhr.send();
// }
//
//
//
// render = function(news) {
//   var htmlString = ""
//   news.forEach(function(singleNew){
//   if (singleNew.length > 50) {
//     htmlString += `<li><div>${singleNew}...</div></li>`
//   } else {
//     htmlString += `<li><div>${singleNew}</div></li>`
//   }
//   });
//   return (`<ul>${htmlString}</ul>`)
// }
//
//
// toView = function(list) {
//   oops = document.getElementById('app');
//   oops.innerHTML = list;
// }
//
// getNews();
