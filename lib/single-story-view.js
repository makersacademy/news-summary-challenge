(function(exports){
    function SingleStoryView(story){
        this.story = story;
        this.summary = "";
        this.url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize";
    }
    SingleStoryView.prototype.getSummary = function(url, story){
        var req = new XMLHttpRequest();
        let view = this;
        req.open('GET', url + "?url=" + story.webUrl + "&sentences_number=5");
        req.onload = function(e){
            var response = JSON.parse(this.response);
            view.summary = response.text;
            console.log(response);
            console.log("got summary for story");
            let image = view.story.fields.thumbnail;
            document.getElementById('story').innerHTML = "<div><img src='" + image + " '><br>"+response.sentences+"<div>";
        };
        req.send();
    };
    SingleStoryView.prototype.text = function () {
        this.getSummary(this.url, this.story);
        };


    exports.SingleStoryView = SingleStoryView;
})(this);