(function(exports){
  function NewsController(newslistView){
    this.controlist = newslistView
  };

  NewsController.prototype.changesids = function(){
    var get_id = this.controlist.divs()
    var change_id = document.getElementById('stories');
    change_id.innerHTML = get_id;
  };





exports.NewsController = NewsController
})(this);
