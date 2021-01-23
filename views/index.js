
fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail&show-elements=image")
  .then(response => {
    console.log("response:")
    console.log(response)
    return response.json()
  })
  .then(data => {
    console.log("data:")
    console.log(data)
    let subHeading = document.getElementById("subHeading")
    data.response.results.forEach((article, index) => {
      subHeading.insertAdjacentHTML('afterend', `<br>`)
      subHeading.insertAdjacentHTML('afterend', `<img src="${data.response.results[index].fields.thumbnail}"><br>`)
      subHeading.insertAdjacentHTML('afterend', `<a href="#${index}">${data.response.results[index].webTitle}</a><br>`)
    });
  });

console.log("updatedag")
