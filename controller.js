window.onload = function() {
  var request = new XMLHttpRequest();
  var list = new ArticleList;

  request.open('GET', 'https://content.guardianapis.com/search?api-key=INSERT API KEY HERE AS A VARIABLE', true)
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data)
  };
request.send()
};
