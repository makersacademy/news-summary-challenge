(function () {
  // var urlGuardian = 'https://content.guardianapis.com/search?api-key=80b7b199-c895-40cf-95d9-7e8ca952ef9e';
  var urlGuardian = 'https://content.guardianapis.com/search?api-key=80b7b199-c895-40cf-95d9-7e8ca952ef9e&show-fields=trailText,headline,thumbnail,body';
  var news ;
  var tittle = document.getElementById("tittle");// document is the DOM (all HTML elements)
  var container = document.getElementById("container");// document is the DOM (all HTML elements)
  var buttonBack =  document.getElementById("back");
  // loadNews(guardianMock.response.results);
  loadApi();
  loadButtonEvent();


  function loadNews(items) {
    var textToInsert = '';
    for (var i = 0; i < items.length; i++){
      textToInsert +=  getItem( items[i] , i);
    };
    
    container.innerHTML = textToInsert;
    loadEventsNews();
  }
  
  function getItem(item, index) {
    return `
      <div>
        <a href="`+item.webUrl+`" id="`+index+`"><h2>`+item.fields.headline+`</h2></a>
        <p>`+item.fields.trailText+`</p>
        <img src="`+item.fields.thumbnail+`"/>
      </div>`;
  }

  function loadApi() {
    var request = new XMLHttpRequest();//Here we create an object called request so that it can make the request
    request.open('GET', urlGuardian); //.open is the method to provide the request with the request GET type and the url
    request.onload = function(){ //.onload is the event that will be executed after request.send (after receiving the response from the API)
      var data = JSON.parse(this.response);//this. here corresponds to request and we can access all its methods and variables
      if (this.status === 200) {
        news = data; // here we keep all the results from the call to Guardian API,
        // so that we do not need to make a second call to the API when clicking on a link to see the complete new in a new page.
        loadNews(data.response.results);
      } else {
        console.log ("error");
      }
    };
    request.send(); //This is to execute the GET request to the Guardian API 
  }

  function loadEventsNews() {
    var a = document.getElementsByTagName("a");

    for (var i = 0; i < a.length; i++) {
      a[i].onclick = function(){ 
        showNews(parseInt( this.id));
        return false;
      }; // this is to prevent 
      //from redirecting to the Guardian when clicking on the link  
    }
  }
  function loadButtonEvent() {
    buttonBack.onclick = function () {
      buttonBack.classList.add('hidden');
      tittle.innerHTML = 'News Summary';
      loadNews(news.response.results);
    }
  }
  function showNews(id) {
    // console.log(id);
    buttonBack.classList.remove('hidden');
    tittle.innerHTML = news.response.results[id].webTitle;
    container.innerHTML = news.response.results[id].fields.body;
  }

}());
