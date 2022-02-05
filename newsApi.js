class NewsApi {
    getNewsInfo(callback) {
      fetch('https://content.guardianapis.com/search?api-key=04fa366b-cd7a-4a4f-98b4-15f1685362ce')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          callback(data)
        });
  
    }
  
    
    
  }












module.exports = NewsApi;