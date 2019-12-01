function News() {
}

News.prototype = (function() {

  function getData() {
  const url = 'https://content.guardianapis.com/search?api-key=f4eb11b1-0a1b-4793-8122-376a8dde0093'
  fetch(url)
  .then(data => {return data.json()})
  .then(result => {console.log(result)})
  }

  return {
    getData: getData
  };
})();
