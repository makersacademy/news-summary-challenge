import News from '../public/javascript/news-model.js'
import assert from './assert.js'

let news = new News();
const boysArticle = new News("BIG BOYS COMING TO TOWN", 'BIG BOYS ARTICLE', 'BIG BOYS IMAGE','BIG BOYS SUMMARY');

function NewsObjectInitialization() {
    assert.isEqTo(News.length, 4, 'News has four parameters (Can take four arguments)')
    assert.isTrue(news.hasOwnProperty('id'), 'News has a ID property')
    assert.isTrue(news.hasOwnProperty('webTitle'), 'News has a headline property')
    assert.isTrue(news.hasOwnProperty('webURL'), 'News has a article URL property');
    assert.isTrue(news.hasOwnProperty('image_url'), 'News has a image URL property');
    assert.isTrue(news.hasOwnProperty('summary'), 'News has a summary URL property');
}
NewsObjectInitialization();

function NewsObjectIDs() {
    assert.isEqTo(boysArticle.id,1,'Boys Article is second news article (ID: 1)');
}

NewsObjectIDs();

function NewsObjectContent() {
    assert.isEqTo(boysArticle.content().webTitle,'BIG BOYS COMING TO TOWN','Return an object with the articles headline')
}

NewsObjectContent();
