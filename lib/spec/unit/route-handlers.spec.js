var proxyquire = require("proxyquire").noPreserveCache();

describe("routeHandlers", function() {
  describe("index", function() {
    it("should return directions for help", function() {
      var responseMock = jasmine.createSpyObj("response", ["send"]);
      require("../../route-handlers").index({}, responseMock);
      expect(responseMock.send)
        .toHaveBeenCalledWith("For help with this API, see the News Summary GitHub repo");
    });
  });

  var requestMock, responseMock, getRequestMock;
  beforeEach(function() {
    requestMock = { query: { apiRequestURL: "http://apirequesturl.com" }};
    responseMock = jasmine.createSpyObj("response", ["json"]);
    getRequestMock = createSpyObj("request", ["pipe"]);
  });

  describe("guardian", function() {
    it("should pass apiRequestUrl to guardianGetRequest", function() {
      var guardianGetRequestMock = jasmine.createSpy("guardianGetRequest").andReturn(getRequestMock);

      var routeHandlers = proxyquire("../../route-handlers", {
        "./guardian-get-request": guardianGetRequestMock
      });

      routeHandlers.guardian(requestMock, responseMock);
      expect(guardianGetRequestMock).toHaveBeenCalledWith(requestMock.apiRequestURL);
    });

    it("should pipe guardian request to response", function() {
      var routeHandlers = proxyquire("../../route-handlers", {
        "./guardian-get-request": jasmine.createSpy("guardianGetRequest").andReturn(getRequestMock)
      });

      routeHandlers.guardian(requestMock, responseMock);
      expect(getRequestMock.pipe).toHaveBeenCalledWith(responseMock);
    });

    it("should report error to response if something goes wrong in guardian get", function() {
      var routeHandlers = proxyquire("../../route-handlers", {
        "./guardian-get-request": function() {
          throw new Error("Error from API");
        }
      });

      routeHandlers.guardian(requestMock, responseMock);
      expect(responseMock.json).toHaveBeenCalledWith({ error: "Error from API" });
    });
  });

  describe("aylien", function() {
    it("should pass apiRequestUrl to aylienGetRequest", function() {
      var aylienGetRequestMock = jasmine.createSpy("aylienGetRequest").andReturn(getRequestMock);

      var routeHandlers = proxyquire("../../route-handlers", {
        "./aylien-get-request": aylienGetRequestMock
      });

      routeHandlers.aylien(requestMock, responseMock);
      expect(aylienGetRequestMock).toHaveBeenCalledWith(requestMock.apiRequestURL);
    });

    it("should pipe aylien request to response", function() {
      var routeHandlers = proxyquire("../../route-handlers", {
        "./aylien-get-request": jasmine.createSpy("aylienGetRequest").andReturn(getRequestMock)
      });

      routeHandlers.aylien(requestMock, responseMock);
      expect(getRequestMock.pipe).toHaveBeenCalledWith(responseMock);
    });

    it("should report error to response if something goes wrong in aylien get", function() {
      var routeHandlers = proxyquire("../../route-handlers", {
        "./aylien-get-request": function() {
          throw new Error("Error from API");
        }
      });

      routeHandlers.aylien(requestMock, responseMock);
      expect(responseMock.json).toHaveBeenCalledWith({ error: "Error from API" });
    });
  });
});
