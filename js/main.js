(function () {
  // var urlGuardian = 'https://content.guardianapis.com/search?api-key=80b7b199-c895-40cf-95d9-7e8ca952ef9e';
  var urlGuardian = 'https://content.guardianapis.com/search?api-key=80b7b199-c895-40cf-95d9-7e8ca952ef9e&show-fields=trailText,headline,thumbnail,body';

  var container = document.getElementById("container");// document is the DOM (all HTML elements)

  // loadNews(guardianMock.response.results);
  loadApi();


  function loadNews(items) {
    var textToInsert = '';
    for (var i = 0; i < items.length; i++){
      textToInsert +=  getItem( items[i] );
    };
    container.innerHTML = textToInsert;
  }
  
  function getItem(item) {
    // return '<div><h2>'+item.fields.headline+'</h2><p>'+item.fields.trailText+'</p></div>';
    return `
      <div>
        <h2>`+item.fields.headline+`</h2>
        <p>`+item.fields.trailText+`</p>
        <img src="`+item.fields.thumbnail+`"/>
      </div>`;
  }
//This function has the responsibility to create 
//each element of the container 
//(each piece of news with its tittle, summary and image)

  function loadApi() {
    var request = new XMLHttpRequest();//Here we create an object called request so that it can make the request
    request.open('GET', urlGuardian); //.open is the method to provide the request with the request GET type and the url
    request.onload = function(){ //.onload is the event that will be executed after request.send (after receiving the response from the API)
      var data = JSON.parse(this.response);//this. here corresponds to request and we can access all its methods and variables
      if (this.status === 200) {
        loadNews(data.response.results)
      } else {
        console.log ("error");
      }
    };
    request.send(); //This is to execute the GET request to the Guardian API 
  }

}());
