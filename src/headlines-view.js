(function(exports) {

  function HeadlinesView(headlinesModel) {
    this.headlinesModel = headlinesModel;
  }

  HeadlinesView.prototype.renderHTML = async function() {

    this.headlinesModel.storiesArray.forEach(story => {
      console.log(story.storyHeadline);
      document.body.innerHTML += "<div><h2>"
                            + story.storyHeadline
                            + "</h2></div>";
    });
  };
  exports.HeadlinesView = HeadlinesView;
})(this);
