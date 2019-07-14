(function (exports) {
  function ApiCall (xmlHttpRequest = XMLHttpRequest) {
    var headlineApi = 'https://api.nextgen.guardianapps.co.uk/uk/lite.json'
    var xhr = new xmlHttpRequest();

    function getHeadlines () {
      _openRequest(headlineApi)
      xhr.onload = function () {
        if (_checkStatus(xhr.status)) {
          console.log(1)
          tenHeadLines = _tenHeadLines(xhr.response)
          console.log(tenHeadLines);
          console.log(3);
          return tenHeadLines
        }
      }
    }


    function _tenHeadLines(data) {
      console.log(2);
      var jsonParsedData = JSON.parse(data)
      var headlines = jsonParsedData.collections[0].content.slice(0,10)
      return headlines
    }


    function _openRequest(apiUrl) {
      xhr.open('GET', apiUrl)
      xhr.send()
    }

    function _checkStatus (status) {
      if (status >= 200 && status < 300) {
        return true
      } else {
        console.log('The request failed!');
      }
    }

    return {
      getHeadlines: getHeadlines,
    }
  }

  exports.ApiCall = ApiCall
})(this)


var api = new ApiCall()
api = api.getHeadlines()
console.log(api)
