function GetStorySummary() {this.text = ""};

GetStorySummary.prototype.getSummary = function (storyUrl) {
  fetch(storyUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var text = myJson.sentences;
    var summary = document.getElementById('story');
    summary.innerHTML = text;
  });
};
