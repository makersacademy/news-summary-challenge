newsApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
guardian = "http://content.guardianapis.com/search?show-fields=all"
// summaryApi = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="

let guardianNews = newsApi + guardian;

class News {
  constructor() {
    this.title;
    this.url;
    this.thumbnail;
    this.summary;
  }
}

class Headlines {
  constructor() {
    this.collection = [];
  }

  add(news) {
    this.collection.push(news)
  }
}

fetch(guardianNews)
.then((res) => res.json())
.then((data) => {
  let content = data.response.results
  let output = ''
  let headline = new Headlines();
  content.forEach(function(news) {
    let item = new News();
    item.title = news.webTitle;
    item.url = news.webUrl;
    item.thumbnail = news.fields.thumbnail;
    item.summary = news.fields.bodyText
    headline.add(item)
    output += `
    <div class="news-item" id="${headline.collection.length-1}"> 
      <h2>${news.webTitle}</h2>
      <img src="${item.thumbnail}" class="thumbnail">

      <div id="myModal${headline.collection.length-1}" class="modal">
      
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2><a href="${item.url}">${item.title}</a></h2>
          <img src="${item.thumbnail}" class="thumbnail">
          <p>${item.summary}</p>
        </div>

      </div>
    </div>
    `;
   
  document.getElementById("news-feed").innerHTML = output;

  for (var i = 0; i < headline.collection.length; i++) {
      var news = document.getElementById(`${i}`);
      news.addEventListener("click", function() {
        var modal = document.getElementById(`myModal${i}`);
        modal.setAttribute("class", "modal-visible");
      })
      
  }
 
    // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  // var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // }

  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  })})
