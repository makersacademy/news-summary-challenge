(function(exports){
  function SingleStoryView(Story) {
    this._story = Story
  }

  SingleStoryView.prototype.toHtml = function(story) {
    var outputHtml = "<ul>";
       outputHtml += "<li><section><img src=" + story.image() + ">" + "<br>";
       outputHtml += "<a href=" + story.webUrl() + ">" + story.headline() + "</a>" + "<br>";
      //  outputHtml += "<button onclick= story.content()" + ">View article summary</button>";
       outputHtml += "</section></li>";
       outputHtml += "</ul>"
     return outputHtml;
   }

  exports.SingleStoryView = SingleStoryView;

})(this);

// outputHtml += "<a href='#" + note.displayTitle() + "</a> </li>";
