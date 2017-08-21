(function(exports){
  function StoryListView() {
    // this._storyListModel = storyListModel
  }

  StoryListView.prototype.toHtml = function(array) {
    var outputHtml = "<ul>";
     array.forEach(function(story){
       outputHtml += "<li><section><img src=" + story.image() + ">" + "<br>";
       outputHtml += "<button onclick= story.content()" + ">View article summary</button>";
       outputHtml += "<a href=" + story.webUrl() + ">" + story.headline() + "</a>" + "<br>";
       outputHtml += "</section></li>";

     });
     outputHtml += "</ul>"
     return outputHtml;
   }

exports.StoryListView= StoryListView;
})(this);
