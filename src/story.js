(function(exports) {
  function Story (headline){
    this.headline = headline;
    MAXIMUM_LENGTH = 50;
  };

  Story.prototype.getHeadline = function () {
    if(this.headline.length > MAXIMUM_LENGTH) {
      return `${this.headline.slice(0, MAXIMUM_LENGTH)}...`
    } else {
      return this.headline;
    }
  };
  exports.Story = Story;
})(this);
