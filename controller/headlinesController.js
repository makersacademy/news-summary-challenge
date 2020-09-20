class HeadlinesController {
    constructor() {
        this.headlines = new Headlines();
        this.ViewClass = HeadlinesView;
        this.headlinesView = new this.ViewClass(this.headlines);
    };

    showHtml() {
        var html = this.headlinesView.returnHtmlView();
        document.getElementById("articles").innerHTML = html;
    }
    updateNews() {
        let that = this;
        this.headlines.articleRequest(function() {
        that.showHtml()
        });
    };
}
