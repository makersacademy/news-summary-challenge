describe ('Http Request Controller', function () {
  it ('stores the API key', function () {
    var httpRequestController = new HttpRequestController ('valid API key')
    expect(httpRequestController.apiKey).toEqual('valid API key')
  })

  it ('creates a new XMLHttpRequest object when instantiated', function () {
    var httpRequestController = new HttpRequestController ('test')
    expect(httpRequestController.request).toBeInstanceOf(XMLHttpRequest)
  })

  it ('converts a string into JSON', function () {
    var httpRequestController = new HttpRequestController ('test')
    expect(httpRequestController.convertToJSON('{"message":"hello world"}').message)
      .toEqual("hello world")
  })

  it ('can send an API request to the Guardian', function () {
    function DoubleXmlHttpRequest () { }

    DoubleXmlHttpRequest.prototype.open = function (method, url) {

    };

    DoubleXmlHttpRequest.prototype.send = function () {
      this.status = 200;
    };

    var httpRequestController = new HttpRequestController ('test', DoubleXmlHttpRequest)
    httpRequestController.sendRequest()
    expect(httpRequestController.request.status).toEqual(200)
  })
})
