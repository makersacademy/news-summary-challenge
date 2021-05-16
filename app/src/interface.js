document.addEventListener("DOMContentLoaded", () => {
  const getHeadLines = async (callback) => {
    await fetch("http://content.guardianapis.com/politics?&show-fields=thumbnail&api-key=test")
      .then(response => response.json())
      .then(data => callback(data.response.results))
    }

  const createLiElement = (webUrl, webTitle) => {
    li = document.createElement("li")
    li.innerHTML = `<a href="${webUrl}"> ${webTitle} </a>`
    document.querySelector("#headlines").append(li)
  }

  const createImgElement = (imgSrc) => {
    img = document.createElement("img")
    img.setAttribute("src", `${imgSrc}`)
    document.querySelector("#headlines").append(img)
  }
     
  getHeadLines((results) => {
    for(let i = 0; i < results.length; i++) {
      console.log(results[i].webTitle)
      let webUrl = results[i].webUrl
      let webTitle = results[i].webTitle
      let imgSrc = results[i].fields.thumbnail
  
      createImgElement(imgSrc)
      createLiElement(webUrl, webTitle)
    }
  })  
})