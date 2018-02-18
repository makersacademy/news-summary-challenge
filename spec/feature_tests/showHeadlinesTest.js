function showHeadlinesTest() {
  it('should show headlines of the first five pieces of news', function(){
    let firstItem = 'Ukip members oust Henry Bolton as leader after only five months'
    let lastItem = 'Ukip leader Henry Bolton arrives at crucial party meeting';
    let shouldNotHave = 'Revealed:  rightwing groups plot to ditch EU safety standards on food and drugs'
    assert.hasContent('newsFeed', firstItem )
    assert.hasContent('newsFeed', lastItem )
    assert.doesntHaveContent('newsFeed', shouldNotHave)
  })


  it('should show links to the news', function() {
    let firstLink = document.getElementById('link1')
    let firstAddress = 'https://www.theguardian.com/politics/2018/feb/18/ukip-members-oust-henry-bolton-as-leader-after-five-months'
    let secondLink = document.getElementById('link2')
    let secondAddress = 'https://www.theguardian.com/politics/2018/feb/18/mps-fake-news-inquiry-barred-uk-washington-embassy-donald-trump'
    let thirdLink = document.getElementById('link3')
    let thirdAddress = 'https://www.theguardian.com/politics/2018/feb/17/neil-kinnock-jeremy-corbyn-labour-stop-brexit-save-nhs'
    let fourthLink = document.getElementById('link4')
    let fourthAddress = 'https://www.theguardian.com/politics/2018/feb/17/labour-dreaming-uk-wants-socialism-privatisation'
    let fifthLink = document.getElementById('link5')
    let fifthAddress = 'https://www.theguardian.com/politics/2018/feb/17/ukip-leader-henry-bolton-arrives-at-crucial-party-meeting'
    assert.equals(firstLink.href, firstAddress )
    assert.equals(secondLink, secondAddress)
    assert.equals(thirdLink, thirdAddress)
    assert.equals(fourthLink, fourthAddress)
    assert.equals(fifthLink, fifthAddress)
  });
}
