class Feed {
  constructor() {
    this.headlines = []
  }

  fetchHeadlines = (apiKey, callback) => {
    let alignment = ""
    let id = 0
    fetch(`https://content.guardianapis.com/search?q=headlines&api-key=${apiKey}&show-fields=body,headline,thumbnail`)
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData)
      jsonData.response.results.forEach(headline => {
        console.log(headline.fields.thumbnail)
        this.headlines.push(headline);
        (document.querySelectorAll(`.split left boxes`).length < 5 ? alignment = "left" : alignment = "right");
        callback(alignment, headline);
      })
    })
  }

  addHeadline = (alignment, headline) => {
    let newPost  = document.createElement('div');
    let headlineImage = document.createElement('img');
    let newId = document.querySelectorAll(`.split ${alignment} boxes`).length + 1;
    headlineImage.src = headline.fields.thumbnail;
    //newPost.innerText = headline.fields.headline;
    newPost.className = `split ${alignment} boxes`; //add formatting for what the box should actually look like
    newPost.id = `${alignment}-${newId}`;
    newPost.innerHTML = `${headlineImage} ${headline.fields.headline}`
    console.log(`.split ${alignment}`);
    document.querySelector(`.split`).appendChild(newPost);
  };

}

module.exports = Feed;

