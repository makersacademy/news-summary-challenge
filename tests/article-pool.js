import Article from '../models/article.js'; // eslint-disable-line

Barracuda.describe('Article', () => {
  Barracuda.it('get the ball rolling with the header', () => {
    const article = new Article('The World is Craazy!');
    Barracuda.expect(article.header).toEqual('The World is Craazy!');
  });

  Barracuda.it('get the ball rolling with the body', () => {
    const article = new Article(
      'The World is Craazy!',
      'There is a missile coming at us from the Moon! Your doctor was right, it IS an alien inside you!',
    );
    Barracuda.expect(article.body).toEqual(
      'There is a missile coming at us from the Moon! Your doctor was right, it IS an alien inside you!',
    );
  });
});
