document.addEventListener("DOMContentLoaded", function () {

  // lazy loading lines 4-27
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));;

  if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    let lazyImageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          $.get("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=https://www.theguardian.com/world/live/2019/oct/01/china-anniversary-nation-marks-70-years-of-communism-amid-hong-kong-protests-live", function (data) {
            lazyImage.src = data.image
          })
          $.get("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=https://www.theguardian.com/world/live/2019/oct/01/china-anniversary-nation-marks-70-years-of-communism-amid-hong-kong-protests-live", function (data) {
            lazyImage.srcset = data.image
          });
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});

$(document).ready(function () {

  $.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2019-10-03&to-date=2019-10-03', function (data) {
    console.log(data)
    array = data.response.results

    // change 2 in the loop initiator below to array.length when ready to stop testing...
    for (let i = 0; i < 1; i++) {
      // headline block generator, can grow this out to include images etc.
      let $dynamiccontainer = $("<div/>")
      $headline = $("<h1/>", { id: `headline${i}` })
      $summary = $("<h3/>", { id: `summary${i}` })
      $image = $("<img/>", { id: `image${i}` })
      $dynamiccontainer.append($headline, $image, $summary).appendTo('#headlines')

      // gets the headline from Guardian API
      $.get("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=" + array[i].webUrl, function (data) {
        $(`#headline${i}`).text(data.title)
        $(`#image${i}`).attr('src', data.image)
        console.log(data)
      });

      // gets summary from Guardian API via Aylien
      $.get("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + array[i].webUrl + "?sentences_number=2?", function (data) {
        console.log(data)
        $(`#summary${i}`).text(data.sentences)
      })
    }
  });

});

