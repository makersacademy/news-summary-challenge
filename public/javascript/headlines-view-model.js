import News from './news-model.js'
import HeadLinesList from "./headlines-list-model.js";

// Prepares the display for the news articles in a list

function HeadLinesView(headLineList){
    this.headLineList = headLineList;
}

HeadLinesView.prototype.wrapHTMLAround = function() {
    let temp_list = [];
    this.headLineList.list.forEach( article => temp_list.push("<div style='margin: 20px;'>" + "<a href=#articles/" + article.id + ">" + "<ul style='list-style-type: none;'><li>" + "<div class='article_image'>" + "<img src='" + article.image_url + "'/>" + "</div>" + "<div class='article_webTitle'>" + article.webTitle + "</div>" + "<br/>View article summary"  + "</li></ul>" + "</a>" + "</div>"));
    return temp_list;
}

HeadLinesView.prototype.getArticle = function(id) {
    let article = this.headLineList.list[id]
    return "<div style='margin: 20px;'>" + "<img src='" + article.image_url + "'/> <br/>" + article.summary + "<br/><a href=" + article.webUrl +  ">Full link to article</a>" + "</div>";
}

export default HeadLinesView;