document.addEventListener("DOMContentLoaded", () => {

  const headlineContainer = document.querySelector('#headlines');
 

  // News is fetched from the guardian API 
  // this is collected as an array of hashes, each containing information on each story 
  fetch('https://content.guardianapis.com/search?api-key=fb25e42e-9341-490d-8630-492793799ef7')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
  // 10 hashes containing details of top stories 
    const headlines = data.response.results
    console.log(headlines)
    displayNews(headlines);
  });
  
 
// This method displays the news headlines
  const displayNews = (headlines) => {
    // returns an array of a given object's own enumerable property names
    Object.keys(headlines).forEach(function (index) {
      // iterating through the array, it extracts headlines
      const story = headlines[index]
      const title = story["webTitle"]
      console.log(title);
  
      // create a html list element with the article title
      let newElement = document.createElement('li');
      // set content to the title and add the new html element to the dom
      newElement.innerText = title;
      headlineContainer.appendChild(newElement)
    })
  };
 
}) 