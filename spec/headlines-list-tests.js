import News from "../public/javascript/news-model.js";
import HeadLinesList from '../public/javascript/headlines-list-model.js'
import assert from './assert.js'


const boysArticle = new News("BIG BOYS COMING TO TOWN", 'BIG BOYS ARTICLE', 'BIG BOYS IMAGE', 'BIG BOYS SUMMARY');
const headlinesList = new HeadLinesList();
const new_article = headlinesList.addArticle(boysArticle)

function headlinesListArticleCreation() {
    assert.isEqTo(new_article.id, 3, 'New article ID on Article List is 3');
    assert.isEqTo(headlinesList.list.length, 1, 'Article List length has increased');
}

headlinesListArticleCreation()