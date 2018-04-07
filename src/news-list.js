(function(exports) {
  function NewsList() {
    this.content = []
  };

  NewsList.prototype.adds = function (news) {
    this.content.push(news)
  };

  NewsList.prototype.show = function () {
    return this.content
  };

  exports.NewsList = NewsList
})(this);
