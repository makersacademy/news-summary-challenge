describe('List', function() {
  it('is able to store and return a few headlines', function() {
    var headline1 = 'fakeHeadline';
    var headline2 = 'fakeHeadline';
    var list = new List();

    list.add(headline1);
    list.add(headline2);

    return expect(list.get()).toMatchArray([headline1, headline2]);
  });
});
