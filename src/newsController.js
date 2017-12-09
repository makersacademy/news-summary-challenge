(function(exports) {
  function NewsController() {

    NewsController.prototype.getData = function() {
       console.log(getApi());
    };
  }
  exports.NewsController = NewsController;
})(this);
