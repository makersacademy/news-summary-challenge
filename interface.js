'use strict';

const dataset = [
  { 
    id: 0,
    heading: "1st dummy heading",
    img: "images/dummy.jpeg",
},
  { 
    id: 1,
    heading: "2nd dummy heading",
    img: "images/dummy.jpeg",
}
]

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {  
  dummyDataLoad()
  getHeadlines()
//create a div
//add a pic
//add the headline below

});

const articles = []

function getHeadlines() {
  let headlines = [];
  //get date i.e.new Date() and convert
  fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=article&query-fields=type&from-date=2021-03-19&use-date=newspaper-edition&q=news")
  .then(response => response.json())
  .then( body => {
    for(let i = 0; i < body.response.results.length; i++){
      if(body.response.results[i].type === "article") {
        let apiUrl = body.response.results[i].apiUrl
        let id = body.response.results[i].id
        let webTitle = body.response.results[i].webTitle
        let webUrl = body.response.results[i].webUrl
        let entry = { apiUrl: apiUrl, id: id, webTitle: webTitle, webUrl: webUrl }
        articles.push(entry)
        // console.log(body.response.results[i])
      }

    }
    
    console.log(articles) 
    // console.log(body.response.results) 
  })
}



function dummyDataLoad() {
  let parentdiv = document.createElement('div')
  parentdiv.id='headlines'

  for(let index = 0; index < dataset.length; index++) {
    if(dataset[index].img) {
      let div = document.createElement('div')
      let h3 = document.createElement('h3')
      let img = document.createElement('img')
      img.src = dataset[index].img
      h3.textContent = dataset[index].heading
      div.appendChild(img)
      div.appendChild(h3)
      parentdiv.appendChild(div)
    }
  }

  document.body.appendChild(parentdiv)
};
//l8r
//add hyperlinks

// load full title