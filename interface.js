fetch('https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test')
  .then(response => {
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      return response.json();
  })
  .then(data => {
    let newsContainer = document.getElementById('headlines');
    let newsArray = data.response.results
    let webLink
    for(let i = 0; i < newsArray.length; i++) {
      let headline = newsArray[i].webTitle
      webLink = newsArray[i].webUrl
      formattedLink = `
      <section id='news-story'>
        <a id='news-story${i+1}' href='${webLink}'>${headline}</a>
        <div>
          <a id='summary-link' href=''>Click for a summary</a>
        </div>
      </section><br>`
      newsContainer.innerHTML += formattedLink
    }
    showSummary()
  })
  .catch(error => console.error(error));

function addClickListener(elementId, clickFunction) {
  let button = document.getElementById(elementId);
  button.addEventListener("click", function(clickEvent) {
    clickFunction(clickEvent);
  });
}

function showSummary() {
  document.getElementById('summary-link').addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
    displaySummary();
  })
}

function displaySummary() {
  // let makersAPI = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='
  fetch('./mockSummary.json')
    .then(response => {
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      return response.json();
    })
    .then(data => {
      let formattedData = data["text"].split("\n\n");
      let sentences = ''
      for(let i = 0; i < formattedData.length; i++) {
        sentences += `<p>${formattedData[i]}</p>`;
      }
      document.getElementById('story-summary').innerHTML = sentences
      hideOverlay();
      on();
    })
}

function hideOverlay() {
  addClickListener("overlay", function() {
    off();
  });
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

  
