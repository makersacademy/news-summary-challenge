import News from './news-model.js'
import HeadLinesList from "./headlines-list-model.js";

// Prepares the display for the news articles in a list

function HeadLinesView(headLineList){
    this.headLineList = headLineList
    this.list = headLineList.list
}

HeadLinesView.prototype.wrapHTMLAround = function() {
    let temp_list = [];
    this.list.forEach( article => temp_list.push("<div>" + "<ul><li>" + "<div class='article_image'>" + "<img src=" + article.image_url + "/></img>" + "</div>" + "<div class='article_webTitle'>" + article.webTitle + "</div>" + "</li></ul>"+ "</div>"));
    return temp_list
}

export default HeadLinesView;


/*
const boysArticle = new News("BIG BOYS COMING TO TOWN", 'BIG BOYS ARTICLE', 'https://placekitten.com/200/300','BIG BOYS SUMMARY');
const headlinesList = new HeadLinesList();
headlinesList.addArticle(boysArticle.content())
const headlinesView = new HeadLinesView(headlinesList)
console.log(headlinesView.list)
console.log(headlinesView.wrapHTMLAround())
*/
