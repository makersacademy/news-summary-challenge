(function (exports){
  var today = new Date
  var date = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

/////////////////////////////////////////////////////////////////////
  API_KEY = "b76ae747-8e36-4c8e-a0b1-ef235e75ab20" // REMOVE LATER //
/////////////////////////////////////////////////////////////////////

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

  getJSON(api_url, function(err, data) {
    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {
       exports.newsData = data.response.results;
    }
  });

})(this);
