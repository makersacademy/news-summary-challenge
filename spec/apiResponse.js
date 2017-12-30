function apiResponse(){
  return{
    a: b,
    c: d,
  }
}


describe("#sendApiRequest", function() {
  it("Sends a request", function() {
    // Arrange
    var mockXhr = sinon.stub();
    var xhrProvider = sinon.stub(['getXhr']);
    var apiService = new ApiService(xhrProvider);
    xhrProvider.respondsTo('getXhr').with(mockXhr);

    // Act
    apiService.sendApiRequest(verb, url, callback, error);

    // Assert
    mockXhr.wasCalledWith(verb, url, callback, error);

  })
})
