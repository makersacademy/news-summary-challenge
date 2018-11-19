function createNode(element)
{
  return document.createElement(element);
}

function append(parent,el)
{
  return parent.appendChild(el);
}

const ul = document.getElementById("stories");

const url = 'https://content.guardianapis.com/politics?&show-fields=all&api-key=3eb03c79-0697-4829-a488-b7bdbd23b47f';

fetch(url)
  .then((Response) => Response.json())
  .then(function(data) {
    let stories = data.response.results;
    console.log(stories)

    return stories.map(function(stories){
      // news = stories.webTitle

      // let li = createNode('li'),
      img = createNode('img'),
      span3 = createNode('span');

      img.src=stories.fields.thumbnail;

      span3.innerHTML=`${stories.webTitle}`;

      // let li1 = createNode('li'),
      span1 = createNode('span');
      let summary = stories.fields.bodyText.substring(0,200);
      span1.innerHTML=`${summary}`;

      let hyperlink = stories.webUrl
      link = createNode("a")
      href = createNode("span")
      link.innerHTML=`${hyperlink}`
      link.innerHTML=`${"Full Article"}`
      link.href=hyperlink

      span5 = createNode("span")
      span5.innerHTML=`${"+++++++++++++++++++++++++++++++++++++++++++++++++++++"}`
      let li1 = createNode('li');
      let li2 = createNode('li');
      let li3 = createNode('li');
      let li4 = createNode('li');
      let li5 = createNode('li');


      append(li1,span1);
      append(li2,img);
      append(li3,span3);
      append(li4,link);
      append(li5,span5);

      append(ul,li1);
      append(ul,li2);
      append(ul,li3);
      append(ul,li4);
      append(ul,li5);
    })

})
