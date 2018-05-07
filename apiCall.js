let url = 'https://content.guardianapis.com/search?show-fields=body,headline,thumbnail&api-key=41dfe7aa-421b-4360-b1bd-5379fe29e9d3';
fetch(url).then(res => {
   if (res.status !== 200) {
       console.log('Theres a problem, status code: ' + res.status);
       return;  
   }

  res.json().then(function(data) {
    var body = document.getElementById('body');
    var headline = document.getElementById('headline');
    var articleArray = data.response.results;

    for (var i = 0; i < articleArray.length; i++) {
      var currentArticle = articleArray[i];
      var listContainer = document.getElementById('articleList');

      var listContainerItemImage = document.createElement("img");
      listContainerItemImage.src = currentArticle.fields.thumbnail;
      listContainer.appendChild(listContainerItemImage);
      
      var listContainerItemHeadline = document.createElement("li");
      listContainer.appendChild(listContainerItemHeadline);
      listContainerItemHeadline.innerHTML = currentArticle.webTitle;
    }
  });
});