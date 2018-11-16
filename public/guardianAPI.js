const ul = document.getElementById("stories");
const url = 'http://content.guardianapis.com/politics?&show-fields=all&api-key=58db12ed-8f2c-4aae-b182-20da584e52f3';

function createNode(element) {
  return document.createElement(element)
}

function append(parent, element) {
  return parent.appendChild(element);
}

fetch(url)
.then((Response) => Response.json())
.then(function(data) {
  let stories = data.response.results;

  stories.map(function(story) {

    let article = story.webTitle
    let link = story.webUrl
    let img = story.fields.thumbnail
    let summary = story.fields.bodyText.substring(0,250)

      let spanArticle = createNode('span');
      spanArticle.innerHTML=`${article}`;
      spanArticle.setAttribute("class", "headline")

      let image = createNode('img');
      image.src = img;

      let newLink = createNode('a');
      let spanLink = createNode('span');
      spanLink.innerHTML=`${link}`;
      newLink.innerHTML=`${'Read full article:'}`;
      newLink.href=link;

      let spanSummary = createNode('span')
      spanSummary.setAttribute("class", "smallText")
      spanSummary.innerHTML=`${summary}`

      let spanDivider = createNode('span')
      spanDivider.innerHTML=`${'--------------------------------------'}`

      let li = createNode('li');
      let li1 = createNode('li');
      let li2 = createNode('li');
      let li3 = createNode('li');
      let li4 = createNode('li')

      append(li, spanArticle);
      append(li1, image);
      append(li2, spanSummary);
      append(li3, newLink);
      append(li4, spanDivider);

      append(ul, li);
      append(ul, li1);
      append(ul, li2);
      append(ul, li3);
      append(ul, li4);
  });
});
