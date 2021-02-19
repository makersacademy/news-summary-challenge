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
    console.log(model.data[0]);
    printTitles(model);
    console.log(model.data[0].webUrl)

    getSummary(model.data[0].webUrl).then((summary) => {
      console.log(summary)
      addHTMLtextElement('p','id','article-0',summary.text)
    })

  });
  
}

interface()

function createDivForEachArticle() {
  for(let i =0; i < 10; i++) {
    // addHTMLtextElement('div', `article-${i}`,'container', 'null')
    addHTMLdiv(`article-${i}`,'container')
  }
}

function printTitles(model) {
  for(let i =0; i < 10; i++) {
    addHTMLtextElement('h1', `heading-${i}`,`article-${i}`, model.data[i].webTitle)
  }
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
  let parent = document.getElementById(HTMLparent);
  parent.appendChild(HTMLObject);
}  