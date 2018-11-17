function creatmode(element) {

  return document.createElement(element);
}

function append(parent,niño) {
  return parent.appendChild(niño);
}

const ul = document.getElementById('headlines');
const url = 'https://randomuser.me/api/?results=10';
fetch(url)
.then((response) => response.json())
.then(function(data){
  let authors = data.results;

  return authors.map(function(author){
    let li = creatmode('li'),
    img = creatmode('img'),
    span = creatmode('span');

    img.src=author.picture.medium;

    span.innerHTML= `${author.name.first} ${author.name.last}`;
    append(li,img);
    append(li,span);
    append(ul,li);

  })
})

.catch(function(error){
  console.log(JSON.stringify(error));
});
