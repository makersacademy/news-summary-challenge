document.addEventListener("DOMContentLoaded", () => {
  function getStory(url) {
    url = url.replace('https://www.theguardian.com', 'http://content.guardianapis.com')
    fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=${url}`)
      .then(response => response.json())
      .then((text) => {
        document.getElementById('headlines').appendChild(document.createElement('h1')).setAttribute('id', url);
        document.getElementById(url).innerHTML = text.response.content.webTitle;
        openStory()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function openStory() {
    document.querySelectorAll('h1').forEach((item) => {
      item.addEventListener('click', () => {
        document.getElementById('headlines').style.display = 'none';
        getSummary(item.getAttribute('id'))

      });
    });
  }

  function getSummary(url) {
    url = url.replace('http://content.guardianapis.com', 'http://www.theguardian.com')
    fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}`)
      .then(response => response.json())
      .then((text) => {
        document.getElementById('textSummary').innerHTML = text.sentences
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const guardianStories = [
    'https://www.theguardian.com/business/2014/feb/18/uk-inflation-falls-below-bank-england-target',
    'https://www.theguardian.com/business/2014/feb/18/uk-inflation-bank-of-england-target-economists-reaction',
    'https://www.theguardian.com/business/2014/mar/04/shop-prices-falling-retail-deflation'
  ]

  guardianStories.forEach((element) => {
    getStory(element)
  });
});