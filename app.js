const userInput = document.querySelector('.input')
const newsList = document.querySelector('.news-list')
const searchForm = document.querySelector('.search')

searchForm.addEventListener('submit',retrieveData)

function retrieveData(e){
  
  if(userInput.value == ""){
    alert('you have not inputted anything')
  }

  // userInput.value = ""
  newsList.innerHTML = ""

  e.preventDefault()

  let topic = userInput.value
  const apiKey = "5a1332c9-b3cf-41b7-a1a3-388cad0b3157"
  const url = `https://content.guardianapis.com/search?q=${topic}&api-key=${apiKey}`
  
  fetch(url,{
    method: "GET",
    withCredentials: true,
    headers: {
      "X-Auth-Token": apiKey,
      "Content-Type": "application/json"
    }
  })
  .then(resp => {
    return resp.json()
  })
  .then(data =>{
    console.log(data.response.results)
    data.response.results.forEach(article =>{
      let li = document.createElement('li')
      let a = document.createElement('a')
      a.setAttribute('href', article.webUrl)
      a.setAttribute('target','_blank')
      a.textContent = article.webTitle
      li.appendChild(a)
      newsList.appendChild(li)
    })
  })
}
