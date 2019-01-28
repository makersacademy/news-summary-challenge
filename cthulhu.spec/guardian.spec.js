describe(" #Onload", () =>{
  it('can change a string to an object', () => {
    // Arrange
    var mockRequest = {
      response: '{ "foo": "bar" }'
    }
    var expectedResponse = { foo: "bar" }

    //Act
    guardian = new Guardian(mockRequest)
    var loadResponse = guardian.onLoad()

    //Assert
    expect(JSON.stringify(loadResponse))
      .toMostlyEqual(JSON.stringify(expectedResponse))
  })
});
