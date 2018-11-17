(function(exports) {
  function newsUpdate() {
    url = "https://content.guardianapis.com/search?";
    api = "15ab9879-6713-40b7-a6d9-0abbeb1a5b71";
    $.get(url + "api-key=" + api, function(data) {
      listStringHtml = '<ul>';
      for (i = 0; i < data.response.results.length; i++) {
        listStringHtml +=
          `<li>
            <a href =${data.response.results[i].webUrl}>
              ${data.response.results[i].webTitle}
            </a>
          </li>`
      };
      listStringHtml += '</ul>';
      $('#news_update').html(listStringHtml);
      console.log(listStringHtml)
    });
  };
  exports.newsUpdate = newsUpdate();
})(this);
