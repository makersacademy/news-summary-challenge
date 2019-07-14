(function (exports) {
  function ApiCall () {
    var headlineApiURL = 'https://api.nextgen.guardianapps.co.uk/uk/lite.json'

    function fetchHeadlines () {
      return fetch(headlineApiURL)
        .then(response => response.json())
        .then(data => data.collections[0].content)
    }

    return {
      fetchHeadlines: fetchHeadlines,
    }
  }

  exports.ApiCall = ApiCall
})(this)
