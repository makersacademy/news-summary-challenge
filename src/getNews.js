getNews = function(url, xml=new XMLHttpRequest()) {
  xml.open('GET', url, true);

  xml.onload = function() {
    if(xml.status == 200) {
      var news = JSON.parse(xml.responseText);

      console.log(news.response.results)
    }
  };

  xml.send();
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = getNews
}
