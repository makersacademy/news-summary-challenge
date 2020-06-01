function newsSearch() {
  event.preventDefault()

let newSearch = document.getElementById("search").value;
  let url = 'https://content.guardianapis.com/search?q=' +
             newSearch +
            '&api-key=' + apiKey + '&show-fields=all';

  let stories= new Request(url);

  fetch(stories)
    .then(response => response.json())
    .then(data => {
    document.getElementById('news').innerHTML = "";
    data.response.results.forEach( item => {
      let storyTitle = document.createElement('h4');
      storyTitle.innerText = item.webTitle;
      document.getElementById('news').appendChild(storyTitle);
      let storyImage = new Image;
      storyImage.src = item.fields.thumbnail;
      document.getElementById('news').appendChild(storyImage);
      let storyBody = document.createElement('p');
      storyBody.innerText = item.fields.bodyText;
      document.getElementById('news').appendChild(storyBody);
    });
  });
  searchReset()
}

function searchReset() {
  let search = document.getElementById("newsForm");
  search.reset();
}
