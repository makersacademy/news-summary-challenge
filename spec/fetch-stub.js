// stub fetch() to return a promise with custom response object
var passedURL = "none";
var json = { text: "TEXT" };
var response = { json: () => { return json; } };
window.fetch = function(url) {
  passedURL = url;
  return new Promise(function(resolve) {
    resolve(response);
  });
};
