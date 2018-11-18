const API_KEY = '1836ff0dabce42ce86ee463e75d05fbd'




window.onload = function() {
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json?" + API_KEY;
  
  loadJSON(url, gotData);
  document.getElementById("app").innerHTML = IndexPage().render();
}
