function GetStorySummary() {};

GetStorySummary.prototype.getSummary = function (storyUrl) {
  fetch(storyUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson.sentences);
  });
};
