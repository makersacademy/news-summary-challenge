import News from '../public/javascript/news-model.js'
import assert from './assert.js'

let news = new News();

function NewsObjectInitialization() {
    assert.isTrue(news.hasOwnProperty('headline'), 'News has a headline property')
    assert.isTrue(news.hasOwnProperty('article_url'), 'News has a article URL property');
    assert.isTrue(news.hasOwnProperty('image_url'), 'News has a image URL property');
    assert.isTrue(news.hasOwnProperty('summary'), 'News has a summary URL property');
}
NewsObjectInitialization();
