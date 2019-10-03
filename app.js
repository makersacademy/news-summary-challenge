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

$(document).ready(function() {

  $.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2019-10-03&to-date=2019-10-03', function(data) {
    console.log(data)
  });
  
  $.get("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/world/live/2019/oct/01/china-anniversary-nation-marks-70-years-of-communism-amid-hong-kong-protests-live?sentences_number=5?", function(data){
    $('#summary').text(data.text)
    console.log(data)
    // get request extracts summary of article (currently set to 5 sentences)
  });

  $.get("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=https://www.theguardian.com/world/live/2019/oct/01/china-anniversary-nation-marks-70-years-of-communism-amid-hong-kong-protests-live", function (data) {
    $('#headline').text(data.title)
    // $('#image').html('<img src="' + data.image + '" />')
    console.log(data)
    // get request extracts all of the meta data about this article
  });


});

