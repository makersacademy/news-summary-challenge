function APICaller() {
  array_data = []
  array_ayliensummary = []

  APICaller.prototype.fetchTodayData = function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=' + today + '&to-date=' + today)
      .then(function (response) {
        response.json().then(function (data) {
          array_data = data.response.results;
          return array_data
        })
      })
  };

  APICaller.prototype.fetchSummariesFromAylien = function () {
    for (i = 0; i < 10 - 1; i++) {
      currenturl = this.retrieveURL(i);
      fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=${currenturl}&sentences_number=3`)
        .then(function (response) {
          response.json().then(function (data) {
            array_ayliensummary.push(data);
            
            })
        })
    }
  }

  APICaller.prototype.retrieveHeadline = function (index) {
    return array_data[index]
  };

  APICaller.prototype.retrieveArticleSummary = function (index) {
    return array_ayliensummary[index]
  };

  APICaller.prototype.retrieveFullArticle = function (index) {
    return array_data[index]
  }

  APICaller.prototype.retrieveImage = function (index) {
    console.log(array_ayliensummary)
    return array_ayliensummary[index]
  }

  APICaller.prototype.retrieveAuthor = function (index) {
    return array_data[index]
  }

  APICaller.prototype.retrieveURL = function (index) {
    return array_data[index].webUrl
  }

};