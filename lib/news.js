// class News {
//   displayNews() {
//     fetch('https://content.guardianapis.com/politics?api-key=41355124-6ce9-43d0-99af-4b99580d961a')
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//       let newsContainer = document.getElementById('news-1');
//       let newsArray = data.response.results
      
//       for(let i = 0; i < newsArray.length; i++) {
//         let newsStory = `<a class='title' data-newsID="${i}" href="${newsArray[i].webUrl}">${newsArray[i].webTitle}</a></br>`
//         newsContainer.innerHTML += newsStory
//       }
//     })
//   };
// };