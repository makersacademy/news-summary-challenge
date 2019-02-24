(function(exports){

    var counter = 0;

    function Story(headline, text, imgLoc) {
        this.headline = headline
        this.text = text
        this.imgLoc = imgLoc
        counter += 1
        this.id = counter
    }

    exports.Story = Story
})(this)
