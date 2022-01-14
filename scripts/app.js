const getByNewest = () => {
  return fetch(`https://content.guardianapis.com/search?order-by=newest&api-key=${API_KEY}`)
  .then(res => res.json())
  .then(res => {return res.response.results})
}

const displayNews = (data) => {
  for (let item of data) {
    let newDiv = document.createElement("div")
    newDiv.append[item.webTitle]
    newDiv.className = "news"
    const mainContainerEl = document.querySelector("#main-container")
    mainContainerEl.append(newDiv)
  }
}

getByNewest()
.then((data) => displayNews(data))
