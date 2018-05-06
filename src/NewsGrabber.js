function exampleOutputTester(json) {
  return json.response.status;
}

function NewsGrabber(json) {
  this.headline = function(index) {
    return json.response.results[index].webTitle;
  };
  this.url = function(index) {
    return json.response.results[index].webUrl;
  };
}
