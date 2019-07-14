(function (exports){
  function FetchGuardianFrontAPI(){
  }

  FetchGuardianFrontAPI.prototype.fetchHeadlines = function(){

    return promise = fetch('https://api.nextgen.guardianapps.co.uk/uk/lite.json')
    .then(response => response.json())
    .then(data => data)

}

exports.FetchGuardianFrontAPI = FetchGuardianFrontAPI

})(this);
