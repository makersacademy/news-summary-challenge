(function(exports) {
  function Newslist(list) {
    this.list = list;
  }

Newslist.prototype.all = function () {
  console.log(list);
}

  exports.Newslist = Newslist;
})(this);
