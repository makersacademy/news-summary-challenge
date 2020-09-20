class ArticleController {

    constructor() {
        this.headlines = new Headlines();
        this.ViewClass = ArticlesView;
        this.articleView = new this.ViewClass(this.article)
    }

    

    showHtml() {
        var html = this.articleView.returnHtmlView();
        document.getElementById("articles").innerHTML = html
    }

    singleArticleClicked(id) {
        
        let article = document.getElementById(id)
        article[0].addEventListener('click', function (clickEvent ) {
            clickEvent.preventDefault();
            document.getElementById("articles").innerHtml = article[0].innerText;
        })
      
      
      
        //let that = this;


    //    this.headlines.summaryRequest(function() {
    //        that.showHtml;
    //    });
    }


}