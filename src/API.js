function createNode(element) {
  return document.createElement(element);
}

function append(parent,el){
  return parent.appendChild(el);
}


const ul = document.getElementById('app'); // Get the list where we will place our authors
  const url = 'https://content.guardianapis.com/search?api-key=79e705af-3678-45d4-bb69-c209643b81ee'; // Get 10 random users

fetch(url)
.then((resp) => resp.json())
.then(function(data){
let authors = data.response.results;
  return authors.map(function(author){
    let li = createNode('li'),
    // img = createNode('img'),
    span = createNode('span');
    // img.src = author.picture.medium;
    span.innerHTML = `${author.webTitle}`;
    // append(li, img);
    append(li, span);
    append(ul, li);
  })
  })

 // })


// fetch(url)
// .then((resp) => resp.json())
// .then(function(data){
//   let authors = data.results;
//   return authors.map(function(author){
//     let li = createNode('li'),
//     img = createNode('img'),
//     span = createNode('span');
//     img.src = author.picture.medium;
//     span.innerHTML = `${author.name.first} ${author.name.last}`;
//     append(li, img);
//     append(li, span);
//     append(ul, li);
//   })
