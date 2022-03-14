import NewsModel from './newsModel';
import NewsApi from './newsApi';
import NewsView from './newsView';

const newsModel = new NewsModel;
const newsApi = new NewsApi;
const newsView = new NewsView(newsModel, newsApi);

console.log('The news app is running');

newsApi.getNews('', (headlines) => {
  newsModel.addInfo(headlines);
  newsView.displayNews();
});