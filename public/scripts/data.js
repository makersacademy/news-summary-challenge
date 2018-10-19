$(document).ready(function() {
  getData()
})

function getData(){
   $.ajax({
    url: "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body",
    type: 'GET',
    dataType: 'json',
  })
  .done(function(data) {
    console.log(data)
  })
  .fail(function(xhr,status,errorThrown) {
    alert("Sorry, there was a problem. Status: " + status)
  })
}
