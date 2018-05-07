// Makes a get request to the passed Aylien API URL.  Returns a
// readable stream object.

var requestLib = require("request");
var credentials = require("./credentials");

function createHeaders() {
  return {
    "X-AYLIEN-TextAPI-Application-ID": credentials.aylien().applicationId,
    "X-AYLIEN-TextAPI-Application-Key": credentials.aylien().key
  };
};

module.exports = function aylienGetRequest(apiRequestUrl) {
  if (apiRequestUrl == null) {
    throw new Error("Need an API request URL");
  }

  if (!apiRequestUrl.match(/^https:\/\/api\.aylien\.com/)) {
    throw new Error("apiRequestUrl must start with https://api.aylien.com");
  }

  return requestLib
    .get({ url: apiRequestUrl, headers: createHeaders() });
};
