(function (exports) {
  function ApiCall (xmlHttpRequest = XMLHttpRequest) {
    var headlineApiURL = 'https://api.nextgen.guardianapps.co.uk/uk/lite.json'

    function getHeadlines () {
      return fetch(headlineApiURL)
        .then(response => response.json())
        .then(data => data.collections)
    }

    return {
      getHeadlines: getHeadlines,
    }
  }

  exports.ApiCall = ApiCall
})(this)
