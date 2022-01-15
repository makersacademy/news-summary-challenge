class Headlines {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container")
    this.newsElements = null
    
    // this.newsElements.addEventListener("click", ()=> {console.log('hello')})
  }
  getByNewest = () => {
    return fetch(`https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&api-key=${API_KEY}`)
    .then(res => res.json())
    .then(res => {return res.response.results})
  }
  
  displayNews = (data) => {
    // let elements = document.getElementsByClassName("news")
    // while (elements.length > 0) {elements[0].remove()}
    console.log(data)
    for (let item of data) { 
      let newsEl = document.createElement("a")
      newsEl.href = '#'
      newsEl.append(item.webTitle)
      newsEl.className = "news"

      let newImg = document.createElement("img")
      newImg.className = "thumbnail"
      newImg.src = item.fields.thumbnail
      this.mainContainerEl.append(newsEl)

      let linebreak = document.createElement('br')
      newsEl.append(linebreak)
      newsEl.append(newImg)
    }
  }

  displaySummary = () => {
    this.newsElements = document.querySelectorAll(".news")
    for (let item of this.newsElements) {
      item.addEventListener("click",() => console.log(item.innerHTML))
    }
  }

}

module.exports = Headlines