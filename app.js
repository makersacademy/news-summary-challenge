window.addEventListener("hashchange", function (event) {
  event.preventDefault();
  var all_ids = document.querySelectorAll('[id^="containerid"]');
  all_ids.forEach(function(node){
    document.getElementById(`${node.id}`).innerHTML = ""
  })

  // **** below can be used for clearing all headlines except the one clicked****
  // var selected_news_id = location.hash.split("/")[1]
  // var all_ids = document.querySelectorAll('[id^="containerid"]')
  // all_ids.forEach(function (unique_id) {
  //   if (unique_id.id !== `containerid${selected_news_id}`) {
  //     document.getElementById(`${unique_id.id}`).innerHTML = ""
  //   }
  // })
});


$(document).ready(function () {

  $.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2019-10-03&to-date=2019-10-03', function (data) {
    array = data.response.results

    // change 2 in the loop initiator below to array.length when ready to stop testing...
    for (let i = 0; i < 2; i++) {
      let $dynamiccontainer = $("<div/>")
      $individualborder = $("<div/>", { class: "news-container" })
      $namingdiv = $("<div/>", { id: `containerid${i}` })
      $headline = $("<h1/>", { id: `headline${i}` })
      $summary = $("<h3/>", { id: `summary${i}` })
      $image = $("<img/>", { id: `image${i}`, class: 'news-image' })
      $link = $("<a/>", { id: `link${i}`, href: `#article/${i}` })
      $dynamiccontainer.append($namingdiv.append($individualborder.append($link.append($headline), $image, $summary))).appendTo('#headlines')

      // gets the standard dataset from Guardian API
      $.get("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=" + array[i].webUrl, function (data) {
        $(`#headline${i}`).text(data.title)
        if (data.image !== '') {
          $(`#image${i}`).attr('src', data.image)
        }
      });

      // gets summary from Guardian API via Aylien
      $.get(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${array[i].webUrl}&sentences_number=3`, function (data) {
        $(`#summary${i}`).text(data.sentences.slice(0, 2).join(' '))
      })
    }
  });

});