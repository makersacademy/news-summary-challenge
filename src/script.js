window.onload = function (){

  var request = new XMLHttpRequest();

  request.open('GET', 'https://content.guardianapis.com/search?api-key=e5ddc65f-2c51-481f-a8d6-8c9304572e0b&&from-date=2019-01-27', true)

  request.onload = function (){
    var response = JSON.parse(this.response);
    window.resp = response;
    var results = response.response.results
    results.forEach(function(result){
      var article = document.createTextNode(result.webTitle);
      var newItem = document.createElement('li');
      newItem.appendChild(article);
      document.getElementById('headlinenews').appendChild(newItem);
    });
  };
  request.send();
};
