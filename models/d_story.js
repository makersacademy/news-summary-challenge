(function(exports){

    var counter = 0;

    function Story(headline, summary, text, imgLoc) {
        this.headline = headline
        this.summary = summary
        this.text = text
        this.imgLoc = imgLoc
        counter += 1
        this.id = counter
    }

    exports.Story = Story
})(this)
