(function (exports){
  function FetchGuardianFrontAPI(){

    // this._fetchHeadlines()
  }

  // function getFront() {
  //   return fetch('https://api.nextgen.guardianapps.co.uk/uk/lite.json')
  //   .then(result => result.json())
  //   .then(res => res)
  // }

  FetchGuardianFrontAPI.prototype._fetchHeadlines = function(){

    // var rawJson;
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://api.nextgen.guardianapps.co.uk/uk/lite.json');
    return xhr.send();
    
    // xhr.onload = function() {
    //   if (xhr.status != 200) {
    //     alert(`Error ${xhr.status}: ${xhr.statusText}`);
    //   } else {
    //     console.log(xhr.response)
    //    rawJson = xhr.response
    //   }
    // };

    // console.log(rawJson)
    

    // getFront().then(function(result){
    //   rawJson = result
    //   return rawJson
    // })

    // var rawJson;
    // fetch('https://api.nextgen.guardianapps.co.uk/uk/lite.json')
    // .then(response => response.json())
    // .then(data => rawJson = data)

    // // rawJson
    // console.log("I am at the end" + rawJson)

    // return rawJson;
}



exports.FetchGuardianFrontAPI = FetchGuardianFrontAPI

})(this);
