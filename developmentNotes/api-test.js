// METHOD 1: XMLHttpRequest
//
// const Http = new XMLHttpRequest();
// const url = 'https://jsonplaceholder.typicode.com/posts';

// Http.open('GET', url);
// Http.send();

// Http.onreadystatechange = () => {
  // if (Http.readyState === 4 && Http.status === 200) {
    // console.log(Http.responseText)
  // }
// }
// ---------------------------------------------------------

// METHOD 2: FETCH

const url = 'https://jsonplaceholder.typicode.com/posts';
// const url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search'
fetch(url)
.then(data => { return data.json() })
.then(res => { console.log(res) })

// ---------------------------------------------------------
