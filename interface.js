document.addEventListener("DOMContentLoaded", () => {
  const getHeadLines = async (callback) => {
    await fetch("http://content.guardianapis.com/politics?&show-fields=thumbnail&api-key=bd78176b-9496-4a74-90b1-7a9cff22fb46")
      .then(response => response.json())
      .then(data => callback(data.response.results))
    }
  const getSummary = async (webUrl, callback) => {
    await fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${webUrl}`)
      .then(response => response.json())
      .then(data => callback(data.sentences))
  }

  const createArticle = (id, title) => {
    li = document.createElement("li")
    li.innerHTML = `<a href="#${id}"> ${title} </a>`
    document.querySelector("#headlines").append(li)
  }

  const createImg = (imgSrc) => {
    img = document.createElement("img")
    img.setAttribute("src", `${imgSrc}`)
    document.querySelector("#headlines").append(img)
  }
  
  const displayHeadLines = () => {
    getHeadLines((results) => {
      for(let i = 0; i < 10; i++) {
        let id = results[i].id
        let title = results[i].webTitle
        let imgSrc = results[i].fields.thumbnail
    
        createImg(imgSrc)
        createArticle(id, title)
      }
    })
  }

  displayHeadLines()
 
  window.addEventListener("hashchange", () => {
    document.querySelector("#headlines").innerHTML = ''
    let webUrl = `https://www.theguardian.com/${location.href.split("#")[1]}`
    getSummary(webUrl, (sentences) => {
      let summary = sentences.join(" ")
      document.querySelector("#summary").innerText = summary
    })
  })

  document.querySelector("#home").addEventListener("click", () => {
    location.href = location.href.split("#")[0]
    document.querySelector("#summary").innerText = ''
    displayHeadLines()
  })
})