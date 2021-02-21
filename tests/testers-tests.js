describe('Framework testers', function(){
  it('passes toEqual', function(){
    return expect("a").toEqual("a");
  });
  it('fails toEqual', function(){
    return expect("a").toEqual("b");
  });
  it('passes toNotEqual', function(){
    return expect("a").toNotEqual("b");
  });
  it('fails toNotEqual', function(){
    return expect("a").toNotEqual("a");
  });
  it('passes toBeTrue', function(){
    return expect("a" === "a").toBeTrue();
  });
  it('fails toBeTrue', function(){
    return expect("a" !== "a").toBeTrue();
  });
  it('passes toBeFalse', function(){
    return expect("a" !== "a").toBeFalse();
  });
  it('fails toBeFalse', function(){
    return expect("a" === "a").toBeFalse();
  });
  it('passes toContain', function(){
    return expect("Hi").toContain("H");
  });
  it('fails toContain', function(){
    return expect("Hi").toContain("Bye");
  });
  it('passes toNotContain', function(){
    return expect("Hi").toNotContain("Bye");
  });
  it('fails toNotContain', function(){
    return expect("Hi").toNotContain("H");
  });
});

describe('HTML testers', function() {
  it('has "show_header" as an HTML element', function() {
    return expect('show_header').toBeHtmlElement();
  });
  it('fails to have "non_existent_button" as an HTML element', function() {
    return expect('non_existent_button').toBeHtmlElement();
  });
  it('has "paragraph" with the text "I am some a paragraph in HTML"', function() {
   return expect('paragraph').toContainHtmlText("I am some a paragraph in HTML");
  });
});
describe('HTML interactive testers', function() {
  it('displays header when button is clicked', function() {
    helpers.clickObject('show_header');
    expect('header').toContainHtmlText("HEADER!!");
  });
  it('displays the text from the text-box', function(){
    helpers.fillInForm('text_box', 'Hi');
    helpers.clickObject('submitButton');
    expect('formResults').toContainHtmlText("Hi");
  });

});
