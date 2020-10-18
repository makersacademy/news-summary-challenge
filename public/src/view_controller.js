class ArticleController {
  
  constructor(articleList) {
    this.articleList = articleList;
    this.articleView = new ArticleView(this.articleList);
  }

  outputHtml() {
    var articleHtml = document.getElementsByClassName('mews_feed')
    articleHtml[0].innerHTML = this.articleView.output();
  }

  dateTime() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var timeOutput = time;
    var dateOuput = date;
    
    var timeHtml = document.getElementById('time');
    timeHtml.innerHTML = timeOutput

    var dateHtml = document.getElementById('date');
    dateHtml.innerHTML = dateOuput
  }

}
