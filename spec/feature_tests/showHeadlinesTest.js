function showHeadlinesTest() {
  it('should show headlines of the first five pieces of news', () => {
    const firstItem = 'Ukip members oust Henry Bolton as leader after only five months';
    const lastItem = 'Ukip leader Henry Bolton arrives at crucial party meeting';
    const shouldNotHave = 'Revealed:  rightwing groups plot to ditch EU safety standards on food and drugs';
    assert.hasContent('newsFeed', firstItem);
    assert.hasContent('newsFeed', lastItem);
    assert.doesntHaveContent('newsFeed', shouldNotHave);
  });


  it('should show links to the news', () => {
    const firstLink = document.getElementById('link1');
    const firstAddress = 'https://www.theguardian.com/politics/2018/feb/18/ukip-members-oust-henry-bolton-as-leader-after-five-months';
    const secondLink = document.getElementById('link2');
    const secondAddress = 'https://www.theguardian.com/politics/2018/feb/18/mps-fake-news-inquiry-barred-uk-washington-embassy-donald-trump';
    const thirdLink = document.getElementById('link3');
    const thirdAddress = 'https://www.theguardian.com/politics/2018/feb/17/neil-kinnock-jeremy-corbyn-labour-stop-brexit-save-nhs';
    const fourthLink = document.getElementById('link4');
    const fourthAddress = 'https://www.theguardian.com/politics/2018/feb/17/labour-dreaming-uk-wants-socialism-privatisation';
    const fifthLink = document.getElementById('link5');
    const fifthAddress = 'https://www.theguardian.com/politics/2018/feb/17/ukip-leader-henry-bolton-arrives-at-crucial-party-meeting';
    assert.equals(firstLink.href, firstAddress);
    assert.equals(secondLink, secondAddress);
    assert.equals(thirdLink, thirdAddress);
    assert.equals(fourthLink, fourthAddress);
    assert.equals(fifthLink, fifthAddress);
  });
}
