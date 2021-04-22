'use strict;'

let articleDisplay = new ArticleDisplay();

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(articleDisplay.getArticleList());
    reject(new Error('Error'));
  },1000)
}); 

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(articleDisplay.getSummary());
    reject(new Error('Error'));
  },2500)
})

Promise.all([promise1, promise2])
.then(() => {
  showSummary();
})
.catch((error) => {
  console.error(error.message)
})


function showSummary() {
  window.addEventListener("hashchange", function(event) {
    let newIndex = parseInt(location.hash.replace("#",""));
    let oldIndex = parseInt(event.oldURL.slice(-3).replace("/","").replace("#",""));

    let articleSum = articleDisplay.listOfArticles[newIndex-1]['summaryText']

    document.getElementById(`body-sum${newIndex}`).innerHTML = articleSum.join(" ")   
    document.getElementById(`body-sum${oldIndex}`).innerHTML = ""
  });
}





