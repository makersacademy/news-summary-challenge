class Headlines {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container")
  }
  getByNewest = () => {
    return fetch(`https://content.guardianapis.com/search?order-by=newest&api-key=${API_KEY}`)
    .then(res => res.json())
    .then(res => {return res.response.results})
  }
  
  displayNews = (data) => {
    for (let item of data) {
      let newDiv = document.createElement("div")
      newDiv.append(item.webTitle)
      newDiv.className = "news"
      this.mainContainerEl.append(newDiv)
    }
  }

}

module.exports = Headlines