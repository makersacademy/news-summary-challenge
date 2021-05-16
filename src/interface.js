'use strict;'

document.addEventListener("DOMContentLoaded", () => {

  guardianApi = (index) => {
    return fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?')
    .then(res => res.json())
    .then(data => { return data.response.results[index]})
  }
  
  aylienApi = (url, title) => {
    fetch(`'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}&title=${title}'`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => {return res})
    .then(data => {return data.text})
  }
  
  
  displayTodaysHeadlines = async() => {
    for(i=0; i<10; i++){
      const response = await guardianApi(i)
      url = response.webUrl
      title = response.webTitle
      const summary = await aylienApi(url, title)

      eachHeadline = document.createElement('li')
      eachHeadline.textContent = title
      document.querySelector('ul').append(eachHeadline)


      para = document.createElement('p')
      text = document.createTextNode(summary)
      para.appendChild(text)
      eachHeadline.appendChild(para)

    }
  }
    
  
 
  
  displayTodaysHeadlines()

  



  // eachHeadline.appendChild(thumbnail)

  // let thumbnail = document.createElement('img')
  // thumbnail.src = `'${data.response.results[item].apiUrl}'`
  


  
  
})