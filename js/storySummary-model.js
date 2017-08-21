(function(exports) {
function StorySummaryModel() {
  this._sentences = [];
}

StorySummaryModel.prototype.addStorySummary = function(sentenceArray) {
  this._sentences.push(sentenceArray);
}

StorySummaryModel.prototype.sentences = function() {
  return this._sentences;
}

exports.StorySummaryModel = StorySummaryModel;
})(this);
