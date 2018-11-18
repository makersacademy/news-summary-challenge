/* eslint-disable import/extensions */
import NewsController from './src/NewsController.js';
import NewsList from './src/NewsList.js';

window.newsController = new NewsController(new NewsList());
window.newsController.render();
