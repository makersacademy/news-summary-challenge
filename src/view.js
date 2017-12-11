(function (exports) {

  function View (postList) {
    this._postList = postList;
  }

  View.prototype.renderHtml = function () {
    var htmlString = "";
    this._postList.list().forEach(function(post){
      htmlString += `<li><div><a href="#headlines/${ post.headline() }">${ post.text() }</a></div></li>`;
    });
    return (`<ul>${ htmlString }</ul>`);
  };


  exports.View = View;
})(this);
