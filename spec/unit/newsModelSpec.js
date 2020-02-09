var newsModel = new NewsModel

describe('it starts with a blank news heading array', expect(newsModel.newsArray.length).toEq(0))

newsModel.addArticle('News title', 'News article summary obtained using the Aylien API. Article taken from the Guardian API.');

describe('it contains  article', expect(newsModel.newsArray.length).toEq(1))

describe('article id is 1', expect(newsModel.newsArray[0]['id']).toEq(1))