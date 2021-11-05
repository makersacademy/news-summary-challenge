const getData = () => {
  let promise = fetch("https://content.guardianapis.com/search?page-size=20&api-key=test&format=json&show-fields=body,headline,thumbnail")
    .then(response => response.json())
    .then(data => {
        // Test console logs
        // Does it pull all the data?
        // console.log(data);
        // Does it return the response array? If yes, how long is it?
        // console.log(data.response.results.length);
        // Does the array item have a webTitle? 
        // console.log(data.response.results[0].webTitle)
        //
      console.log(data.response.results)
    }
    )
    return promise;
  }

getData();