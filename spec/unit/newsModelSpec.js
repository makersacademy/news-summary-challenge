var newsModel = new NewsModel

describe('it starts with a blank news heading array', expect(newsModel.newsArray.length).toEq(0))

newsModel.addArticle('News title', 'News article summary obtained using the Aylien API. Article taken from the Guardian API.');

describe('it contains  article', expect(newsModel.newsArray.length).toEq(1))

describe('article id is 1', expect(newsModel.newsArray[0]['id']).toEq(1))

newsModel.addArticle('Another news title', 'Another news article summary.');

describe('article id increments by 1 each article', expect(newsModel.newsArray[1]['id']).toEq(2))

describe('returns article by id', expect(newsModel.returnArticle(1)['id']).toEq(1))