(function(exports) {
  function newsUpdate() {
    url = "https://content.guardianapis.com/search?";
    api = "15ab9879-6713-40b7-a6d9-0abbeb1a5b71";
    $.get(url + "api-key=" + api, function(data) {
      for (i = 0; i < data.response.results.length; i++) {
        $('#news_update').text(data.response.results.webTitle);
        console.log(data.response.results[i]);
      };
    });
  };
  exports.newsUpdate = newsUpdate;
})(this);
