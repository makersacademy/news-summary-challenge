function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }

  function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}
const ul = document.getElementById('summary')

const key = "4231bdbf-461e-4c0e-bfd2-a90f40fee967"
const date = "2018-04-08"

 fetch(`http://content.guardianapis.com/search?from-date=${date}&api-key=${key}`)
 .then(response => response.json())
 .then(function(data) {
    let items = data.results;
    return items.map(function(items) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = "https://image.ibb.co/nhv7Ex/guardian.png"
      span.innerHTML = `${items.apiUrl} `;
      append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });
