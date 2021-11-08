(() => {
  // index.js
  document.addEventListener("DOMContentLoaded", () => {
    const headlineContainer = document.querySelector("#headlines");
    fetch("https://content.guardianapis.com/search?api-key=fb25e42e-9341-490d-8630-492793799ef7").then((response) => {
      return response.json();
    }).then((data) => {
      const headlines = data.response.results;
      console.log(headlines);
      displayNews(headlines);
    });
    const displayNews = (headlines) => {
      Object.keys(headlines).forEach(function(index) {
        const story = headlines[index];
        const title = story["webTitle"];
        console.log(title);
        let newElement = document.createElement("li");
        newElement.innerText = title;
        headlineContainer.appendChild(newElement);
      });
    };
  });
})();
