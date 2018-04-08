describe('List', function() {
  it('is able to create and store article models', function() {
    var list = new List();

    list.add('A test headline', 'image url');
    list.add('A test headline', 'image url');


    // TODO: Figure out how to mock this test
    return expect(list.get()).toMatchArray([new Article('A test headline', 'image url'),new Article('A test headline', 'image url')]);
  });
});
