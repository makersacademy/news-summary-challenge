(function(exports) {

  function newsUpdate() {
    url = "https://content.guardianapis.com/search?";
    api = "15ab9879-6713-40b7-a6d9-0abbeb1a5b71";
    $.get(url + "api-key=" + api + "&show-fields=trailText,thumbnail", function(data) {
      $('#news_update').html(generateArticleListHTML(data));
    });
  };

  function generateArticleListHTML(data) {
    listStringHtml = '<ul>';
    articles = data.response.results
    for (i = 0; i < articles.length; i++) {
      listStringHtml +=
        `<li><img class="picture" src="${articles[i].fields.thumbnail}" width="100"></img>
          <caption>${articles[i].sectionName}</caption><br>
          <a href =${articles[i].webUrl}>
            ${articles[i].webTitle}
          </a>
          <span>${articles[i].fields.trailText}</span>
        </li>`
    };
    return listStringHtml + '</ul>';
  };

  exports.newsUpdate = newsUpdate();
})(this);
