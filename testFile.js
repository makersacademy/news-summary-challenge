const apiKey = require('./apiKey');
const apiUrl = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`

  let storyData = null;
    
    fetch(apiUrl)
    .then((response) => response.json())
    .then((storyData) => {
    console.log(storyData.response.results)
  });

console.log('Requesting story data');