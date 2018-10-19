$(document).ready(function() {
  getData()
})

function getData(){
   $.ajax({
    url: "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk?show-editors-picks=true&order-by=newest",
    type: 'GET',
    dataType: 'json',
  })
  .done(function(data) {
    console.log(data.response.editorsPicks)
    return data.response.editorsPicks
  })
  .fail(function(xhr,status,errorThrown) {
    alert("Sorry, there was a problem. Status: " + status)
  })
}
