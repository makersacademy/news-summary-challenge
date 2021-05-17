document.addEventListener("DOMContentLoaded", () => {
  function getHeadLines(results) {
    fetch("http://content.guardianapis.com/politics?api-key=test")
      .then((response) => response.json())
      .then(data => results(data.response.results))
  }

  getHeadLines((results) => {
    results.forEach((result) => {
      console.log(result.webUrl)
      li = document.createElement("li")
      li.innerHTML = `<a href="${result.webUrl}"> ${result.webTitle} </a>`
      document.querySelector("#articlesContainer").append(li)
    })
  })    

})
