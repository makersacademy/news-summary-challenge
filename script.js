
(function(exports) {
  function theNews() {
    let url = 'https://content.guardianapis.com/search?q=UK&api-key=' +
               apiKey + '&show-fields=all';

    let stories= new Request(url);

    fetch(stories)
      .then(response => response.json())
      .then(data => {
        data.response.results.forEach( item => {
        let storyTitle = document.createElement('h4');
        storyTitle.innerText = item.webTitle.toUpperCase();
        document.getElementById('news').appendChild(storyTitle);
        let storyImage = new Image;
        storyImage.src = item.fields.thumbnail;
        document.getElementById('news').appendChild(storyImage);
        let storyBody = document.createElement('p');
        storyBody.innerText = item.fields.bodyText
        document.getElementById('news').appendChild(storyBody);
      });
    });
  }
  theNews();
})(this);
