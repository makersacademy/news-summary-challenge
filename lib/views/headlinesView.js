(function(exports) {  
  function HeadlinesView() {  };

  HeadlinesView.prototype = {
    createHTML: function(headlines) {
      var htmlString = "<ul>";

      for (var i = 0; i < headlines.length; i++) {
        htmlString += `<li><div>${headlines[i].getText()}</div></li>`;
      };
    
      htmlString += "</ul>"

      return htmlString;
    }
  };

  exports.HeadlinesView = HeadlinesView;
})(this);