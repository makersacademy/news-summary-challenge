(function(exports) {
  function NewsList(items) {
    this.items = []
  };
  NewsList.prototype.store = function(news) {
    this.items.push(news);
  };
  NewsList.prototype.list = function() {
    return this.items
  };
  exports.NewsList = NewsList;
})(this);