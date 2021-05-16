document.addEventListener("DOMContentLoaded", () => {
  const getHeadLines = async (callback) => {
    await fetch("http://content.guardianapis.com/politics?&show-fields=thumbnail&api-key=test")
      .then(response => response.json())
      .then(data => callback(data.response.results))
    }
  const getSummary = async (webUrl, callback) => {
    await fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${webUrl}`)
      .then(response => response.json())
      .then(data => callback(data.sentences))
  }

  const createLiElement = (id, webTitle) => {
    li = document.createElement("li")
    li.innerHTML = `<a href="#${id}"> ${webTitle} </a>`
    document.querySelector("#headlines").append(li)
  }

  const createImgElement = (imgSrc) => {
    img = document.createElement("img")
    img.setAttribute("src", `${imgSrc}`)
    document.querySelector("#headlines").append(img)
  }
  
  const displayHeadLines = () => {
    getHeadLines((results) => {
      for(let i = 0; i < results.length; i++) {
        let id = results[i].id
        let webTitle = results[i].webTitle
        let imgSrc = results[i].fields.thumbnail
    
        createImgElement(imgSrc)
        createLiElement(id, webTitle)
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

  document.querySelector("#back-to-home").addEventListener("click", () => {
    location.href = location.href.split("#")[0]
    document.querySelector("#summary").innerText = ''
    displayHeadLines()
  })
})