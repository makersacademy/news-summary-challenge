$(document).ready(function() {
  $.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?edition=uk', function(data) {
    document.getElementById("headlines").innerHTML = printHeadLines(data.response.results)
    });
;
});

function printHeadLines(array) {
  var newArray = []
  array.forEach(function(result) {
    newArray.push(`<a href="${result.webUrl}" target="_blank">` + `${result.webTitle}` + `</a>`)
  });
  return `<ul><li><p>` + newArray.join(`</p></li><li><p>`) + `</li></ul>`
  // console.log(newArray)
};