let summary = require('node-sumuparticles');

(function (exports) {
  function Summary(webUrl) {
    this.url = webUrl;
  }
  // Not working yet
  Summary.prototype.summarize = function () {
    summary.summarize(this.url, function (title, summary, failure) {
      if (failure) { console.log('There was an error.');
      }

      console.log(title);
      console.log(summary.join('\n'));
    });
  };

  exports.Summary = Summary;
})(this);
