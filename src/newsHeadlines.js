let newsArticles = []

 function getNewsTitles() {
   return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-fields=body&show-elements=image&page-size=20&show-fields=thumbnail")
     .then( (response) => {
       console.log(response.json())
       return response.json()
     })
 }

 function extractTitles(dataObject) {
   let results = dataObject.response.results

   for ( let i = 0; i < results.length; i++ ) {
     let selected = {
       webTitle: results[i].webTitle,
     }
     newsArticles.push(selected)
   }
   return newsArticles
 }

   getNewsTitles()
     .then( (response) => {
     let titlesHash = extractTitles(response)

     let titlesHTML = renderHTML(titlesHash).join("<br/>")
     document.getElementById("headlines").innerHTML = titlesHTML
   })

 function renderHTML(data){
   let headlines = []
   for ( let i = 0; i < data.length; i++ ){
     let title = data[i].webTitle
     let titleHTML = `<p data-titleID="${i}">${title}/p>`
     headlines.push(titleHTML)
   }
   return headlines
 }