document.addEventListener("DOMContentLoaded", () => { 
  // const getHeadlines = async (callback) => {
  //   await fetch ('https://content.guardianapis.com/search?&q=debate&api-key=test')
  //   .then(response => response.json)
  //   .then(data => callback(data.response))
  // }

  const list = document.getElementById("news-list")


  const headlinesResponse = fetch("http://content.guardianapis.com/politics?&show-fields=thumbnail&api-key=bd78176b-9496-4a74-90b1-7a9cff22fb46")
      .then(response => response.json())
      .then(data => { return data.response.results; });
  console.log(headlinesResponse)

  const headlinesResponse = function (api) { fetch(`${api}`)
      .then(response => response.json())
      .then(data => { return data.response.results; });
  }

  const createCard = async () => {
    const headlines = await headlinesResponse;
    const newsBody = await bodyResponse; 
    for(let i = 0; i < 10; i ++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("story");
      const imgTag = document.createElement("img")
      const headTag = document.createElement("h3")
      const topicTag = document.createElement("span")
      topicTag.classList.add("topic")
      topicTag.innerHTML = 'Politics / '
      headTag.innerHTML = headlines[i]['webTitle']
      imgTag.src = headlines[i]['fields']['thumbnail'];
      newDiv.appendChild(imgTag);
      newDiv.appendChild(topicTag)
      newDiv.appendChild(headTag)
      list.appendChild(newDiv);
    }
  }
  
  createCard(); 


});