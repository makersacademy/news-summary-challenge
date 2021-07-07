(function (exports){
  var today = new Date
  var date = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  var api_url = "https://content.guardianapis.com/search?from-date="+ year + "-" + month  +"-" + date + "&api-key=" + API_KEY

  function getJSON(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
          callback(null, xhr.response);
        } else {
          callback(status, xhr.response);
        }
      };
      xhr.send();
  };

  function printer(data) {
    document.getElementById('app').innerHTML = new ViewAllStories(data).convertDataToHtml();
  };

  getJSON(api_url, function(err, data) {
    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {
       exports.newsData = data.response.results;
       printer(newsData);
    }
  });



})(this);
