import News from '../public/javascript/news-model.js'
import HeadlinesView from '../public/javascript/headlines-view-model.js'
import assert from './assert.js'


const boysArticle = new News("BIG BOYS COMING TO TOWN", 'BIG BOYS ARTICLE', 'https://placekitten.com/200/300','BIG BOYS SUMMARY');
let headlinesView = new HeadlinesView()


function NewsViewInstantiation() {
    assert.isTrue(headlinesView.hasOwnProperty('list'), 'NewsViews takes one argument')
}
NewsViewInstantiation()

function NewsViewWrapHTML() {
    let data = headlinesView.wrapHTMLAround(boysArticle.content())
    assert.isEqTo(headlinesView.list.length,1,'Adding an article to the headline view')
    //console.log(data)
    assert.isTrue(data[0] === "<div><ul><li><div class='article_image'><img src=https://placekitten.com/200/300/></img></div><div class='article_headline'>BIG BOYS COMING TO TOWN</div></li></ul></div>", 'HTML Wrapping around Headline view')
}

NewsViewWrapHTML()