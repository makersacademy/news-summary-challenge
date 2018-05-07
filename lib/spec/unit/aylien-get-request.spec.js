var proxyquire = require("proxyquire").noPreserveCache();

describe("aylienGetRequest", function() {
  it("should throw if no URL passed", function() {
    expect(function() {
      require("../../aylien-get-request")();
    }).toThrow("Need an API request URL");
  });

  it("should throw if request not to Aylien domain", function() {
    expect(function() {
      require("../../aylien-get-request")("http://somewhereelse.com");
    }).toThrow("apiRequestUrl must start with https://api.aylien.com");
  });

  it("should make get request to aylien URL with API key", function() {
    var requestMock = jasmine.createSpyObj("request", ["get"]);

    var credentialsMock = {
      aylien: createSpy("aylien").andReturn({ applicationId: "applicationId", key: "key" })
    };

    var aylienGetRequest = proxyquire("../../aylien-get-request", {
      "request": requestMock,
      "./credentials": credentialsMock
    });

    aylienGetRequest("https://api.aylien.com/api/v1/summarize?url=http://urltosummarise.com");

    expect(requestMock.get)
      .toHaveBeenCalledWith({
        url: "https://api.aylien.com/api/v1/summarize?url=http://urltosummarise.com",
        headers: {
          "X-AYLIEN-TextAPI-Application-ID": "applicationId",
          "X-AYLIEN-TextAPI-Application-Key": "key"
        }
      });
  });
});
