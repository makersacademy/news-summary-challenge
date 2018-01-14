(function(exports){
  function ViewAllStories(dataInput){
    this.data = dataInput;
  };

  ViewAllStories.prototype.convertDataToHtml = function(){
    html = "<ul>"
    for(var i = 0; i < this.data.length; i++){
      var story = this.data[i];
      html += "<li><h3>" + story.webTitle + "</h3><a>"+ story.webUrl + "</a></li>";
    }
    return html += "</ul>";
  };


  exports.ViewAllStories = ViewAllStories;
})(this);
