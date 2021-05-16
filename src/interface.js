'use strict;'

document.addEventListener("DOMContentLoaded", () => {

  guardianApi = () => {
    fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?')
    .then(res => {return res.json()})
    .then(data => {
      for (item in data.response.results){ 
      let headline = data.response.results[item].webTitle
      eachHeadline = document.createElement('li')
      eachHeadline.textContent = headline
      document.querySelector('ol').append(eachHeadline)}
    })
  } 
  
  

  console.log(guardianApi())

  displayTodaysHeadlines = () => {
    


  }

  displayTodaysHeadlines()
  
  // displayTodaysHeadlines = async() => {
    
  //   for(i=0; i<10; i++){
  //     let headline = await guardianApi
  //     console.log(headline)
      
  //     eachHeadline = document.createElement('li')
      
  //     eachHeadline.textContent = headline
      
  //    document.querySelector('ol').append(eachHeadline)
  //   }
    
  // }

  

  
  

  
})