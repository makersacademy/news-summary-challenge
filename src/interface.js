document.addEventListener("DOMContentLoaded", () => { 
  // const getHeadlines = async (callback) => {
  //   await fetch ('https://content.guardianapis.com/search?&q=debate&api-key=test')
  //   .then(response => response.json)
  //   .then(data => callback(data.response))
  // }

  const list = document.getElementById("news-list")


  const headlinesResponse = fetch("http://content.guardianapis.com/politics?&show-fields=thumbnail&api-key=bd78176b-9496-4a74-90b1-7a9cff22fb46")
      .then(response => response.json())
      .then(data => { return data.response.results; })
 console.log(headlinesResponse);

  const createCard = async () => {
    const headlines = await headlinesResponse; 
    for(let i = 0; i < 10; i ++) {
      const newDiv = document.createElement("div");
      const imgTag = document.createElement("img")
      const imgLink = headlines[i]['fields']['thumbnail'];
      console.log(imgLink)
      imgTag.src = imgLink;
      newDiv.appendChild(imgTag);
      list.appendChild(newDiv);
    }
  }
  
  // createCard(); 


});