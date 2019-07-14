(function(exports) {

  function newsList() { }

  newsList.prototype = {

    display: function(arg) {
      var array = []; var counter = 0;
      arg.forEach( element => {
        array.push('<li id='+counter+'><a href=\''+ element.webUrl +'\'>' + element.webTitle + '</a></li>'); counter++;
      });
      return '<ul>' + array.join('') + '</ul>'
    }

  }

  exports.newsList = newsList
})(this);