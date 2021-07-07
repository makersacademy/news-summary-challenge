(function(exports) {
   function Story(headline) {
     this.headline = headline;
   }

   Story.prototype.returnHeadline = function() {
     return `<li><h2>${this.headline}</h2></li>`
   }

   exports.Story = Story;
})(this);