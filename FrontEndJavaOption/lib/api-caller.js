function APICaller() {
  array_guardiandata = []
  array_ayliensummary = []
  array_aylienextract = []

  APICaller.prototype.fetchTodayData = function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=' + today + '&to-date=' + today)
      .then(function (response) {
        response.json().then(function (data) {
          array_guardiandata = data.response.results;
          return array_guardiandata
        })
      })
  };

  APICaller.prototype.fetchSummariesFromAylien = function () {
    for (let i = 0; i < 10; i++) {
      currenturl = this.retrieveURL(i);
      fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=${currenturl}&sentences_number=3`)
        .then(function (response) {
          response.json().then(function (data) {
            array_aylienextract.push(data);
            
            })
        })
      fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${currenturl}&sentences_number=3`)
        .then(function (response) {
          response.json().then(function (data) {
            array_ayliensummary.push(data);

          })
        })
    }
  }

  APICaller.prototype.retrieveHeadline = function (index) {
    return array_aylienextract[index]['title']
  };

  APICaller.prototype.retrieveArticleSummary = function (index) {
    return array_ayliensummary[index]['sentences'].slice(0, 2).join(' ')
  };

  APICaller.prototype.retrieveFullArticle = function (index) {
    return array_aylienextract[index]['article']
  }

  APICaller.prototype.retrieveImage = function (index) {
    console.log(array_aylienextract)
    return array_aylienextract[index]['image']
  }

  APICaller.prototype.retrieveAuthor = function (index) {
    array_aylienextract[index]['author']
  }

  APICaller.prototype.retrieveURL = function (index) {
    return array_guardiandata[index].webUrl
  }

};