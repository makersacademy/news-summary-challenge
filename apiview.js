const retrieve = require("./api");

class apiView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
  

    const searchFrom = document.querySelector('.search');
    const input = document.querySelector('.input')
    const newsList = document.querySelector('.news-list')

    searchFrom.addEventListener('submit', retrieve)
  }

  displayNews
    

  
}
    
    
  
  

module.exports = apiView;