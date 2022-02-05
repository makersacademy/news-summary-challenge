class News{
  showNews() {
    fetch("http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=SECRET_API_KEY")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
  })
}

};