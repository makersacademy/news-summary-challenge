// import { NewsArticleList } from './newsArticleList';
// import { setupArticleList } from '../spec/setupArticleList';
// import { setupArticleList } from '../spec/setupArticleList';

// create new article list
const demoArticleList = new NewsArticleList();

// create new controller, passing in the list
const demoNewsController = new NewsController(demoArticleList);

// render news stories on page
demoNewsController.renderHeadlines();
