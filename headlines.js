function createNode(element){
  return document.createElement(element);
}

function append(parent, el){
  return parent.appendChild(el);
}

const ul = document.getElementById("headlines");

const url = API

fetch(url)
.then((Response) => Response.json())
.then(function(data){
  let headlines = data.response.results;

  headlines.map(function(headline){

    let article = headline.webTitle,
    originalArticle = headline.webUrl;


    let li = createNode('li'),
    span = createNode('span'),
    link = createNode('a');

    link.setAttribute("href",`${originalArticle}`);

    span.innerHTML = `${article}`
    append(link, span);
    append(li, link);
    append(ul, li);
  })
})
