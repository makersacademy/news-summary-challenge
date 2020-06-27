function instantiatesWithEmptyNewsReel() {
  var newsReel = new NewsReel();

  assert.isTrue(newsReel._list.length === 0);
};

instantiatesWithEmptyNewsReel();