const Index = require('./index')

describe('hello', () => {
  it('returns hello, word', () => {
    const index = new Index();

    expect(index.hello()).toEqual('Hello!');
  });
});
