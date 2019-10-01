$(document).ready(function() {
  $.get("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/world/live/2019/oct/01/china-anniversary-nation-marks-70-years-of-communism-amid-hong-kong-protests-live?sentences_number=5?", function(data){
    $('#summary').text(data.text)
    console.log(data)
    // get request extracts summary of article (currently set to 5 sentences)
  });

  $.get("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=https://www.theguardian.com/world/live/2019/oct/01/china-anniversary-nation-marks-70-years-of-communism-amid-hong-kong-protests-live", function (data) {
    $('#headline').text(data.title)
    $('#image').html('<img src="' + data.image + '" />')
    console.log(data)
    // get request extracts all of the meta data about this article
  });


});

