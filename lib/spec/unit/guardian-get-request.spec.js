var proxyquire = require("proxyquire").noPreserveCache();

describe("guardianGetRequest", function() {
  it("should throw if no URL passed", function() {
    expect(function() {
      require("../../guardian-get-request")();
    }).toThrow("Need an API request URL");
  });

  it("should throw if request not to Guardian API domain", function() {
    expect(function() {
      require("../../guardian-get-request")("http://somewhereelse.com");
    }).toThrow("apiRequestUrl must start with http://content.guardianapis.com");
  });

  it("should make get request to guardian URL with API key", function() {
    var requestMock = jasmine.createSpyObj("request", ["get"]);

    var credentialsMock = {
      guardian: createSpy("guardian").andReturn({ key: "key" })
    };

    var guardianGetRequest = proxyquire("../../guardian-get-request", {
      "request": requestMock,
      "./credentials": credentialsMock
    });

    guardianGetRequest("http://content.guardianapis.com/alex?show-fields=body");

    expect(requestMock.get)
      .toHaveBeenCalledWith("http://content.guardianapis.com/alex?show-fields=body&api-key=key");
  });
});
