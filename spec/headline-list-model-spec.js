describe('List', function() {
  it('is able to create and store single headline models', function() {
    var list = new List();

    list.add('A test headline');
    list.add('A test headline');

    // TODO: Figure out how to mock this test
    return expect(list.get()).toMatchArray([new Headline('A test headline'), new Headline('A test headline')]);
  });
});
