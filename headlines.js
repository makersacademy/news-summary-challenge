function createNode(element){
  return document.createElement(element);
}

function append(parent, el){
  return parent.appendChild(el);
}

const ul = document.getElementById("headlines");

const url = "https://content.guardianapis.com/search?show-fields=all&api-key=11d5b061-787f-4f68-bd78-d98d945bdffb"

fetch(url)
.then((Response) => Response.json())
.then(function(data){
  let headlines = data.response.results;
  console.log(headlines);

  headlines.map(function(headline){

    let article = headline.webTitle,
    originalArticle = headline.webUrl,
    thumbnail = headline.fields.thumbnail;


    let li = createNode('li')
    imgli = createNode('li'),
    img = createNode('img'),
    span = createNode('span'),
    link = createNode('a');
    img.src = thumbnail;

    link.setAttribute("href",`${originalArticle}`);

    span.innerHTML = `${article}`
    append(link, span);
    append(imgli, img);
    append(li, link);
    append(ul, imgli);
    append(ul, li);
  })
})

document.getElementById("headlines").addEventListener("click", function() {
  myFunction();
}, false);

document.getElementById("news").addEventListener("click", function() {
  myFunction();
}, false);

function myFunction() {
    var x = document.getElementById("headlines");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
