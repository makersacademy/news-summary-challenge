describe('.displayNews', function(){
  it('returns long string of html', function(){
    expect(displayNews(exampleData)).toBe('http://hello.com');
  });
});
