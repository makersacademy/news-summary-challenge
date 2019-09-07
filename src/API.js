function createNode(element) {
  return document.createElement(element);
}

function append(parent,el){
  return parent.appendChild(el);
}


const ul = document.getElementById('app'); // Get the list where we will place our authors
  const url = 'https://content.guardianapis.com/search?show-fields=all&show-elements&api-key=79e705af-3678-45d4-bb69-c209643b81ee'; // Get 10 random users



fetch(url)
.then((resp) => resp.json())
.then(function(data){
this.authors = data.response.results;
console.log(authors)
  return authors.map(function(author){
    var i

        for(i=0; i < 10; i++){
          ul.innerHTML = "<ul>"+(authors.map( x => "<li><div><a href='#" + i++ + "'>" + x.webTitle + "</a></div></li>").join(""))+"</ul>"

        }

  })
  })



  window.addEventListener("hashchange", showNewsItem);

  function showNewsItem(){
    var id = Number(location.hash.split("#")[1])
    ul.innerHTML = this.authors[id].fields.bodyText
  }

  //// so instead of webTitle we just need the full story

// this works
// fetch(url)
// .then((resp) => resp.json())
// .then(function(data){
// let authors = data.response.results;
//   return authors.map(function(author){
//     let li = createNode('li'),
//     // img = createNode('img'),
//     span = createNode('span');
//     // img.src = author.picture.medium;
//     span.innerHTML = `${author.webTitle}`;
//     // append(li, img);
//     append(li, span);
//     append(ul, li);
//   })
//   })

















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
