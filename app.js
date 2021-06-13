'use strict';

document.addEventListener("DOMContentLoaded", () => {
  let news = new News();
  news.getPostTitle();

  const closeBtn = document.getElementById("closeBtn");

  setTimeout(setup, 500)

  function setup(){
    const summary = document.querySelectorAll('.summary')

    for(let i = 0; i < summary.length; i++) {
      summary[i].onclick = () => {
        document.querySelector('#articleSpace').className = "appear"
        let url = summary[i].id
        news.summarisedText()
      }
    }
  }

  closeBtn.onclick = () => {
    document.querySelector('#articleSpace').className = "disappear"
  };


  
})

// news.summarisedText(url)
