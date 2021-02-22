
let headlinesList = []

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
