document.addEventListener("DOMContentLoaded", () => {
  const getHeadLines = async (callback) => {
    await fetch("http://content.guardianapis.com/politics?api-key=test")
      .then(response => response.json())
      .then(data => callback(data.response.results))
    }
     
  getHeadLines((results) => {
    for(let i = 0; i < results.length; i++) {
      console.log(results[i].webTitle)
      let webUrl = results[i].webUrl
      let webTitle = results[i].webTitle
      li = document.createElement("li")
      li.innerHTML = `<a href="${webUrl}"> ${webTitle} </a>`
      document.querySelector("#headlines").append(li)
    }
  })    
})