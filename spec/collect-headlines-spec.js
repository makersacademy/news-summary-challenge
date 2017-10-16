function testApiCall() {
  var api = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

  var apicall = new ApiCall(api)

    assert.isTrue(apicall.constructor === XMLHttpRequest)

    apicall.collect()
    assert.isTrue(apicall.constructor.responseText) === ("");

  }
testApiCall();
