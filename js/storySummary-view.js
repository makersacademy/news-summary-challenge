  function StorySummaryView(storySummaryModel) {
    this._summaryToPrint = storySummaryModel.sentences();
  }

  var storiesDiv = document.getElementById("stories");

  StorySummaryView.prototype.toHtml = function(sentenceArray) {
    var newDiv = document.createElement("div");
    for(i=0; i < sentenceArray.length; i++) {
      newDiv.innerHTML += "<p>" + sentenceArray[i] + "</p>" + "<br>"
    }
    return newDiv;
  };

  StorySummaryView.prototype.displayStorySummary = function() {
    var newSection = this.toHtml(this._summaryToPrint);
    storiesDiv.append(newSection);
  }
