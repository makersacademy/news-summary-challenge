import News from '../public/javascript/news-model.js'
import HeadLinesView from '../public/javascript/headlines-view-model.js'
import assert from './assert.js'
import HeadLinesList from "../public/javascript/headlines-list-model.js";


const boysArticle = new News("BIG BOYS COMING TO TOWN", 'BIG BOYS ARTICLE', 'https://placekitten.com/200/300', 'BIG BOYS SUMMARY');
const headlinesList = new HeadLinesList();
headlinesList.addArticle(boysArticle);
const headlinesView = new HeadLinesView(headlinesList)

function NewsViewInstantiation() {
    assert.isTrue(headlinesView.hasOwnProperty('list'), 'NewsViews takes one argument')
}

NewsViewInstantiation()

function NewsViewWrapHTML() {
    let data = headlinesView.wrapHTMLAround()
    assert.isEqTo(headlinesView.list.length, 1, 'Adding an article to the headline view')
    assert.isTrue(data[0] === "<div><ul><li><div class='article_image'><img src=https://placekitten.com/200/300/></img></div><div class='article_webTitle'>BIG BOYS COMING TO TOWN</div></li></ul></div>", 'HTML Wrapping around Headline view')
}

NewsViewWrapHTML()