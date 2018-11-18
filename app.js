window.onload = function() {
  const API_KEY = '46d4c3c8937142eca861cda8a7eca0c0';

  var url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`
  var req = new Request(url);
  fetch(req)
    .then(function(response) {
      return response.json();
      // console.log(response.json());
    })
    .then(function(data) {
      console.log(data);
    })
    console.log(data)
  document.getElementById("app").innerHTML = IndexPage().render(data);
}
