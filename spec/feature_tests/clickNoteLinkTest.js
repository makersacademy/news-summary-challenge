function visitANote(){
  it('Checks entered note appears correctly in notebody', function() {
    fillInForm('noteContent', "We all love a very nice house");
    clickButton('saveNote');
    fillInForm('noteContent', "Hello you there, gorgeous person in the world!");
    clickButton('saveNote');
    clickLink('Hello you there, gor');
    clickLink('We all love a very n');
    setTimeout(function() {
      assert.hasContent('notebody', 'We all love a very nice house');
      assert.doesntHaveContent('notebody', 'Hello you there');
    }, 1000)
  });
}
