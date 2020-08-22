import News from "../public/javascript/news-model.js";
import HeadlinesList from '../public/javascript/headlines-list-model.js'
import assert from './assert.js'


const boysArticle = new News("BIG BOYS COMING TO TOWN", 'BIG BOYS ARTICLE', 'BIG BOYS IMAGE','BIG BOYS SUMMARY');
const headlinesList = new HeadlinesList();
const new_article = headlinesList.addArticle(boysArticle)

assert.isEqTo(new_article.id, 3,'New article ID is 0')