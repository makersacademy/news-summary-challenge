function interface() {
  let model = new Model();

  function getData() {
    return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest").then((response) => {
      return response.json()
    });
  }

  function getSummary(webURL) {
    return fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${webURL}`).then((response) => {
      return response.json()
    });
  }

  createDivForEachArticle();

  getData().then((post) => { 
    model.data = post.response.results;
    console.log(post);
    printTitles(model);
  });

  let container = document.getElementById('container');

  container.addEventListener('click', (e) => {
    const singleLink = e.path.find((item) => {
      if (item.classList) {
          return item.classList.contains('single-link');
      } else {
          return false;
      }
    });
    if (singleLink) {
      const linkID = singleLink.getAttribute('id');
      let heading = document.getElementById('heading-' + linkID);
      let homepage = container.innerHTML;
      getSummary(model.data[linkID].webUrl).then((summary) => {
        console.log(summary)
        let text = ""
        for(let i=0; i< summary.sentences.length; i++ ) {
          text += '<p>' + summary.sentences[i]; '</p>'
        }
        let linkToArticle = model.data[linkID].webUrl;
        container.innerHTML = `<div id='full-page'><h1 id='full-page-heading'>${heading.textContent}</h1>${text}</p><a class='button' href=${linkToArticle}>Original Article</a><button id='back' class='button'>Back</button></div>`;
        document.getElementById('back').addEventListener('click', (e) => {
          container.innerHTML = homepage;
        })
      }) 
    }
  })
  
}

interface()

function createDivForEachArticle() {
  for(let i =0; i < 10; i++) {
    addHTMLdiv(`${i}`,'container')
  }
}

function printTitles(model) {
  for(let i =0; i < 10; i++) {
    addImage(model, i);
    addHTMLtextElement('h1', `heading-${i}`,`${i}`, model.data[i].webTitle)
  }
}

function addImage(model, i) {
  let parent = document.getElementById(i);
  let location = `images/${model.data[i].pillarName}.png`;
  let image = new Image();
  image.src = location;
  image.className = 'image';
  parent.appendChild(image);
}

function addHTMLtextElement(HTMLtype, HTMLid, HTMLparent, text) {
  let HTMLObject = document.createElement(HTMLtype);
  HTMLObject.id = HTMLid;
  let HTMLObjectText = document.createTextNode(text);
  HTMLObject.appendChild(HTMLObjectText);
  let parent = document.getElementById(HTMLparent);
  parent.appendChild(HTMLObject);
}  

function addHTMLdiv(HTMLid, HTMLparent) {
  let HTMLObject = document.createElement('div');
  HTMLObject.id = HTMLid;
  HTMLObject.classList.add("single-link");
  let parent = document.getElementById(HTMLparent);
  parent.appendChild(HTMLObject);
}  