var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var data = JSON.parse(this.responseText)
       document.getElementById("app").innerHTML = data.response.edition['webTitle']
       console.log(data)
    }
};
xhttp.open("GET",  "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search", true);
xhttp.send();




// var ajax = new XMLHttpRequest();
//
// ajax.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world", true);
// ajax.send();
//
// ajax.onreadystatechange = function() {
//
// 	if (ajax.readyState == 4 && ajax.status == 200) {
//
// 		// var data = ajax.responseText;
//   var data = JSON.parse(ajax.responseText)
//
// 		console.log(data.response.status);
// 	}
// }







// $(document).ready(function() {
//
// $.get("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world", function(data) {
//   $('#app').html(data.response.status);
//   console.log(data.response.status);
// })
// });
