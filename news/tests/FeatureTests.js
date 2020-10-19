webIt('adding a reminder and testing it shows on the page', './index.html', function(testWindow) {
  populateForm(testWindow, 'text', 'breaking news');
  clickButton(testWindow, 'submit-button');
  expect(testWindow.document.body.textContent).toHaveContent("breaking news");
});

webIt('adding a reminder and testing a different reminder doesnt show on the page', './index.html', function(testWindow) {
  populateForm(testWindow, 'text', 'more breaking news');
  clickButton(testWindow, 'submit-button');
  expect(testWindow.document.getElementById('news-list').textContent).notToHaveContent("breaking news");
});

webIt('notes are abbreviated to 20 characters if longer than', '/index.html', function(testWindow) {
  populateForm(testWindow, 'text', 'These are breaking news here in London oh my goodness.');
  clickButton(testWindow, 'submit-button');
  expect(testWindow.document.getElementById('news-list').textContent).toHaveContent("These are breaking n ...");
});

webIt('full note is shown when clicking on expand note', '/index.html', function(testWindow) {
  populateForm(testWindow, 'text', 'These are breaking news here in London oh my goodness.');
  clickButton(testWindow, 'submit-button');
  clickButton(testWindow, 'button-0');
  expect(testWindow.document.getElementById('fullArticle').textContent).toHaveContent("These are breaking news here in London oh my goodness.");
});

webIt('can add 2 notes', './index.html', function(testWindow) {
  populateForm(testWindow, 'text', 'breaking news');
  clickButton(testWindow, 'submit-button');
  populateForm(testWindow, 'text', 'These are breaking news here in London oh my goodness.');
  clickButton(testWindow, 'submit-button');
  expect(testWindow.document.getElementById('news-list').textContent).toHaveContent("These are breaking n ...");
});
