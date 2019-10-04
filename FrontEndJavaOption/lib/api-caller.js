function APICaller() {
  array_data = []
  array_summarytext = []

  APICaller.prototype.fetchTodayData = function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
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
    for (let i = 0; i < array_data.length; i++) {
      currenturl = retrieveURL(i);
      fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${currenturl}&sentences_number=3`)
        .then(
          response.json().then(function (data) {
            array_summarytext.push(data.response.results);
            resolve();
          })
        )
    }
  }

  APICaller.prototype.retrieveHeadline = function (index) {
    return array_data[index].webTitle
  };

  APICaller.prototype.retrieveArticleSummary = function (index) {
    return this._summary[index] // need to check the data structure here to validate summary
  };

  APICaller.prototype.retrieveFullArticle = function (index) {
    return array_data[index].fields.bodyText
  }

  APICaller.prototype.retrieveImage = function (index) {
    return array_data[index].fields.thumbnail
  }

  APICaller.prototype.retrieveAuthor = function (index) {
    return array_data[index].fields.author
  }

  APICaller.prototype.retrieveURL = function (index) {
    return array_data[index].fields.webUrl
  }

};