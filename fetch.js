var url = "https://content.guardianapis.com/search?from-date=2021-09-12&to-date=2021-09-12&show-elements=image&api-key=test";

//fetch('"https://content.guardianapis.com/search?from-date=2021-09-12&to-date=2021-09-12&show-elements=image&api-key=test"')
//  .then(response => response.data)
//  .then(data => console.log(data));


console.log(fetch('https://content.guardianapis.com/search?from-date=2021-09-12&to-date=2021-09-12&show-elements=image&api-key=test'))

fetch('https://content.guardianapis.com/search?from-date=2021-09-12&to-date=2021-09-12&show-elements=image&api-key=test')
   .then(response => response.json())
   .then(data => console.log(data));


   //fetch('https://content.guardianapis.com/search?from-date=2021-09-12&to-date=2021-09-12&show-elements=image&api-key=test')
//.then(response => response.json())
//.then(data => {console.log(data);
//    console.log(data.response.results[0].webTitle)
//})
