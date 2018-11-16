function createNode(element)
{
  return document.createElement(element);
}

function append(parent,el)
{
  return parent.appendChild(el);
}

const ul = document.getElementById("stories");

const url = 'https://content.guardianapis.com/politics?&show-fields=thumbnail&api-key=3eb03c79-0697-4829-a488-b7bdbd23b47f';

fetch(url)
  .then((Response) => Response.json())
  .then(function(data) {
    let stories = data.response.results;
    console.log(stories)

    return stories.map(function(stories){
      // news = stories.webTitle

      let li = createNode('li'),
      img = createNode('img'),
      span = createNode('span');

      img.src=stories.fields.thumbnail;

      span.innerHTML=`${stories.webTitle}`;

      append(li,img);
      append(li,span);
      append(ul,li);
    })

})
