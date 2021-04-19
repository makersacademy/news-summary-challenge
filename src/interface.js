let list = new NewsList()
let newsFeed = document.getElementById('newsFeed')
let apiData = []
let apiTestData = []
let localDataStore = window.localStorage;


if (localDataStore.getItem('feedData') === null) {
  updateFeed()
} else if (localDataStore.getItem('feedData') !== null) {
  getLocalData()
  .then(function(data) {
    apiTestData = data[0]
    console.log(data[0])
    updateNewsList(data[0])
    showFeed()
  })
}

function storeDataLocally(data) {
  jsonData = JSON.stringify(data)
  localDataStore.setItem('feedData', `[${jsonData}]`);
}

async function getLocalData() {
  let data = await JSON.parse(localDataStore.getItem('feedData'))
  return await data
}

async function getData (url) {
  let response = await fetch(url)
  if (response.status !== 200) {
    console.log(`There was a problem. Status code: ${response.status}`)
    return
  }
  return await response.json()
} 

function updateFeed () {
  getData('https://content.guardianapis.com/search?q=politics&api-key=test&format=json&show-fields=body,headline,thumbnail')
  .then(function(data) {
    apiData = data.response.results
    console.log(apiData)
    updateNewsList(apiData)
    showFeed()
    storeDataLocally(apiData)
  })
}

function updateNewsList (data) {
  for (i = 0; i< 10; i++) {
    list.createNewItem(data[i].fields.headline, data[i].fields.body, data[i].fields.thumbnail)
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
  if (newsFeed !== null) {
    newsFeed.insertAdjacentHTML('beforeend', feedElement);
  }
}
