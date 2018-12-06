(function(exports) {

  function newsUpdate() {
    url = "https://content.guardianapis.com/search?";
    api = "15ab9879-6713-40b7-a6d9-0abbeb1a5b71";
    fields = "&show-fields=trailText,thumbnail";
    $.get(url + "api-key=" + api + fields, function(data) {
      $('#news_update').html(generateArticleListHTML(data));
    });
  };

  function generateArticleListHTML(data) {
    listStringHtml = '<ul>';
    articles = data.response.results
    for (i = 0; i < articles.length; i++) {
      listStringHtml +=
      `<li onclick="location.href='${articles[i].webUrl}'">
        <img src="${articles[i].fields.thumbnail}" width="200">
        <caption>${articles[i].sectionName}</caption><br>
        <h4>${articles[i].webTitle}</h4>
        <span>${articles[i].fields.trailText}</span>
      </li>`
    };
    return listStringHtml + '</ul>';
  };

  exports.newsUpdate = newsUpdate();
})(this);
