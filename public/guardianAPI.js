function createNode(element) {
  return document.createElement(element)
}

function append(parent, element) {
  return parent.appendChild(element);
}

const ul = document.getElementById("stories");

const url = 'http://content.guardianapis.com/politics?api-key=58db12ed-8f2c-4aae-b182-20da584e52f3';

fetch(url)
.then((Response) => Response.json())
.then(function(data) {
  let stories = data.response.results;

  stories.map(function(story) {

    let article = story.id

      let li = createNode('li'),
      span = createNode('span');

      span.innerHTML=`${article}`

      append(li, span);
      append(ul, li);
  });
});
