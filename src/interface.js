let list = new NewsList()
let newsFeed = document.getElementById('newsFeed')
let apiData = []

async function getData (url) {
  fetch(url)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(`There was a problem. Status code: ${response.status}`)
      return
    }
    response.json().then(function(data) {
     apiData = data.response.results
     console.log(apiData)
    })
  })
}

async function updateFeed () {
  await getData('https://content.guardianapis.com/search?q=politics&api-key=test&format=json&show-tags=contributor&show-fields=body,headline,thumbnail')
  .then(updateNewsList())
  console.log(apiData)
}

function updateNewsList () {
  for (i = 0; i< 10; i++) {
    list.createNewItem(apiData[i].fields.headline, apiData[i].fields.body, apiData[i].fields.thumbnail)
  }
}


function showFeed () {
  list.getList().forEach(function(newsItem) {
    displayFeed(
    `<button class="expand"><img src=${newsItem.picture}><br>${newsItem.headline}</button>
    <div class="content">
      <p>${newsItem.body}</p>
    </div>`)
  })

  var expand = document.getElementsByClassName("expand")
  var i

  for (i = 0; i < expand.length; i++) {
    expand[i].addEventListener("click", function() {
      this.classList.toggle("active")
      var content = this.nextElementSibling
      if (content.style.maxHeight) {
        content.style.maxHeight = null
      } else {
        content.style.maxHeight = content.scrollHeight + "px"
      } 
    })
  }
}

function displayFeed (feedElement) {
  newsFeed.insertAdjacentHTML('beforeend', feedElement);
}