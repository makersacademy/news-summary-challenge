function NewsList() {
    this.news = [];
    this.getNews();
}

NewsList.prototype = {
    getNews: function() {
        var self = this;
        var guardian = new GuardianRequest();
        guardian.news.forEach(function(element) {
            self.news.push(new News(element.fields.headline, element.webUrl, element.id, element.fields.thumbnail, element.blocks.body[0].bodyTextSummary));
        });
    }
};

