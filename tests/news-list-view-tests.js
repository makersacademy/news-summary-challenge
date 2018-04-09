
describe('Test for the SPA', function() {
  describe('Page elements', function() {
    it('has a title called "Guardian News"', function() {
      return expect('header').toContainHtmlText('Guardian News')
    })

    it('has a text box element', function() {
      return expect('news_input').toBeHtmlElement();
    });

    it('has a submit button element', function() {
      return expect('create_news').toBeHtmlElement();
    });

    it('Has a news list element', function() {
      return expect('news_table').toBeHtmlElement();
    });

  });

  describe('SPA interactivity', function() {
    it('fills in and creates a new form', function() {
      helpers.fillInForm('news_input', 'First Guardian New');
      helpers.clickObject('create_news');
      return expect('news_list').toContainHtmlText('First Guardian New');
    });

    it('does not show "big_news" initially', function() {
      return expect('big_news').toNotBeVisible();
    });

    it('clicks on a list to show the "big_news" div', function() {
      helpers.clickObject('news_0');
      return expect('big_news').toBeVisible();
    });

    it('clicks on a list to hide the "form_div" div', function() {
      helpers.clickObject('news_0');
      return expect('form_div').toNotBeVisible();
    });

    it('clicks on a list to hide the "list_div" div', function() {
      helpers.clickObject('news_0');
      return expect('list_div').toNotBeVisible();
    });

    it('clicks on back button to hide the "big_news" div', function() {
      helpers.clickObject('news_0');
      helpers.clickObject('back_button');
      return expect('big_news').toNotBeVisible();
    });

    it('clicks on back button to show the "form_div" div', function() {
      helpers.clickObject('news_0');
      helpers.clickObject('back_button');
      return expect('form_div').toBeVisible();
    });

    it('clicks on back button to show the "list_div" div', function() {
      helpers.clickObject('news_0');
      helpers.clickObject('back_button');
      return expect('list_div').toBeVisible();
    });

    it('replaces the form with body of the news', function() {
      helpers.fillInForm('news_input', 'Second Guardian New');
      helpers.clickObject('create_news');
      helpers.clickObject('news_1');
      return expect('news_body_text').toContainHtmlText('Second Guardian New');
      });

  });

});
