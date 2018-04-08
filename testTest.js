describe('Framework tests', function(){
  it('should pass toEqual', function(){
    return expect(1).toEqual(1);
  });
  it('should fail toEqual', function(){
    return expect(1).toEqual(2);
  });
  it('should pass toNotEqual', function(){
    return expect(1).toNotEqual(2);
  });
  it('should fail toNotEqual', function(){
    return expect(1).toNotEqual(1);
  });
  it('should pass toBeTrue', function(){
    return expect(1 === 1).toBeTrue();
  });
  it('should fail toBeTrue', function(){
    return expect(1 !== 1).toBeTrue();
  });
  it('should pass toNotBeTrue', function(){
    return expect(1 !== 1).toNotBeTrue();
  });
  it('should fail toNotBeTrue', function(){
    return expect(1 === 1).toNotBeTrue();
  });
  it('should pass toContain', function(){
    return expect("Hello!").toContain("H");
  });
  it('should fail toContain', function(){
    return expect("Hello!").toContain("X");
  });
  it('should pass toNotContain', function(){
    return expect("Hello!").toNotContain("DUCK");
  });
  it('should fail toNotContain', function(){
    return expect("Hello!").toNotContain("H");
  });
});

describe('HTML testers', function() {
  it('should have an HTML button called "show_header"', function() {
    return expect('show_header').toBeHtmlElement();
  });
  it('should have an HTML button called "another_button"', function() {
    return expect('another_button').toBeHtmlElement();
  });
  it('should have a paragraph called "paragraph" with the text "I am some test text"', function() {
    return expect('paragraph').toContainHtmlContent("I am some test text");
  });
});

describe('Interactive testers', function() {
  it('It should display header when button is pushed', function() {
    helpers.clickObject('show_header');
    expect('header').toContainHtmlContent("HEADER!!");
  });
  it('Should display the data input into the form as a header', function(){
    helpers.fillInForm('input_form', 'Hello World!');
    helpers.clickObject('submitButton');
    expect('formResults').toContainHtmlContent("Hello World!");
  });
  
});
