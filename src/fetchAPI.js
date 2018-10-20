function FetchAPI(url) {
  this.url = url
}

FetchAPI.prototype.get = async function(url) {
  let json;
  await fetch(this.url, { mode: 'cors' })
    .then(response => response.json())
    .then(function(data) {
      json = data;
    })
    .catch(error => {
      if (error) {
        console.log('Error!');
      }
    });
  return json;
}
