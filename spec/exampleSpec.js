(function exampleSpec() {
  it('Should pass a trivial test', () => {
    const exampleString = 'hello';
    jennifer.expects(exampleString).toEqual('hello');
  });
}());
