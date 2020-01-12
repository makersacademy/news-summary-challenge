describe('Headline', () => {
  it('can add headlines to the list', () => {
    var testheadline = new Headline();
    testheadline.add("A");
    expect(testheadline.show()[0]).toEq("A");
  })
});