// import { NewsArticleList } from './newsArticleList';
// import { setupArticleList } from '../spec/setupArticleList';
// import { setupArticleList } from '../spec/setupArticleList';

// create new article list
const demoArticleList = new NewsArticleList();

// add 5 articles ot the list
for (let i = 0; i < 5; i++) {
  setupArticleList(demoArticleList);
}

// create new controller, passing in the list
const demoNewsController = new NewsController(demoArticleList);

// render news stories on page
demoNewsController.renderHeadlines();
