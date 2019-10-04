window.addEventListener("hashchange", function (event) {
  event.preventDefault();
  var all_ids = document.querySelectorAll('[id^="containerid"]');
  all_ids.forEach(function(node){
    document.getElementById(`${node.id}`).innerHTML = ""
  })
  var selected_news_id = location.hash.split("/")[1]
  var url_to_retrieve = article_array[selected_news_id].webUrl
  $.get("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=" + url_to_retrieve, function(data) {
    console.log(data)
    $('#summary-headline').text(data.title)
    $('#summary-image').text(data.image)
    $('#summary-article').text(data.article)
    $('#summary-date').text(data.publishDate.substring(0,10))
    $('#summary-author').text(data.author)
  });
});


$(document).ready(function () {

  $.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2019-10-03&to-date=2019-10-03', function (data) {
    article_array = data.response.results

    // change 2 in the loop initiator below to array.length when ready to stop testing...
    for (let i = 0; i < article_array.length; i++) {
      let $dynamiccontainer = $("<div/>")
      $individualborder = $("<div/>", { class: "news-container" })
      $namingdiv = $("<div/>", { id: `containerid${i}` })
      $headline = $("<h1/>", { id: `headline${i}` })
      $summary = $("<h3/>", { id: `summary${i}` })
      $image = $("<img/>", { id: `image${i}`, class: 'news-image' })
      $link = $("<a/>", { id: `link${i}`, href: `#article/${i}` })
      $dynamiccontainer.append($namingdiv.append($individualborder.append($link.append($headline), $image, $summary))).appendTo('#headlines-list')

      // gets the standard dataset from Guardian API
      $.get("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=" + article_array[i].webUrl, function (data) {
        $(`#headline${i}`).text(data.title)
        if (data.image !== '') {
          $(`#image${i}`).attr('src', data.image)
        }
      });

      // gets summary from Guardian API via Aylien
      $.get(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${article_array[i].webUrl}&sentences_number=3`, function (data) {
        $(`#summary${i}`).text(data.sentences.slice(0, 2).join(' '))
      })
    }
  });

});