
let headlinesList = []
//
// function updateList() {
//   var headlines = document.getElementById('headlines')
//   let tempHTML = ''
//   for (let i = headlinesList.length - 1; i >= 0 ; i--) {
//     tempHTML += headlineLayout(headlinesList[i],i)
//
//   }
//   headlines.innerHTML = tempHTML
//
// }

// function headlineLayout(string, index){
//   return `<div id="headline-${index}" ><p id='headline-text-${index}'>${string}</p>`
//   // <button class="minimize-button" onClick="minimizeNote(${index})" id="minimize-${index}">-</button>
//   // <button class="expand-button" onClick="expandNote(${index})" id="expand-${index}">
//   // +</button></div>
//
// }

// function getHeadlines() {
// fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body')
//   .then(response => response.json())
//   .then(data => {
//     for(i = 0; i < data.response.results.length; i++){
//       headlinesList.push(data.response.results[i])
//     }
// console.log(headlinesList)
//     return headlinesList
//     allHeadlines()
//   });
// }

async function getHeadlines1() {
  const response = await fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body');
  const headlines = await response.json();
  headlines1 = headlines.response.results
  console.log(headlines.response.results);
  for(i = 0; i < headlines1.length; i++){
  // const { webTitle, webURL } = headlines1;
  console.log(headlines1[i].webTitle);
  console.log(headlines1[i].webUrl);
  headlinesList.push(headlines1[i].webTitle)
document.getElementById('head1').textContent = headlines1[i].webTitle
}
  console.log(headlinesList)
  }
  // document.getElementById('headlines').src .createElement('headlines')


getHeadlines1()

function displayHeadlines(){

}

// function allHeadlines(){
//   let list = document.getElementById('headlines');
//   list.innerHTML = '';
//   headlinesList.forEach(function(headline, i) {
//     let headlineItem = document.createElement('li')
//     let headlineTitle = headlinesList.results[i]
//
//   });
//
// }



// getHeadlines()
// updateList()
// allHeadlines()
