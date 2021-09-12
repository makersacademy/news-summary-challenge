function getHeadline(url) {
  fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=${url}`)
    .then(response => response.json())
    .then((text) => {
      document.getElementById('headlines').appendChild(document.createElement('h1')).innerHTML = text.response.content.webTitle
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function getSummary(url) {
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
  'http://content.guardianapis.com/business/2014/feb/18/uk-inflation-falls-below-bank-england-target',
  'http://content.guardianapis.com/business/2014/feb/18/uk-inflation-bank-of-england-target-economists-reaction',
  'http://content.guardianapis.com/business/2014/mar/04/shop-prices-falling-retail-deflation'
]

guardianStories.forEach((element) => {
  // element.replace('https://www.theguardian.com', 'http://content.guardianapis.com');
  console.log(element)
  getHeadline(element);
});