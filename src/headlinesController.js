(function(exports) {

  function HeadlinesController () {
    this.guardianRequest = 0;
    this.articleList = 0;
    this.gkey = credentials.guardian().key;
  }

  HeadlinesController.prototype.api = function () {
    this.guardianRequest = new GuardianRequest();
    this.articleList = this.guardianRequest.getHeadlines(this.gkey);
  };

exports.HeadlinesController = HeadlinesController;
})(this);
