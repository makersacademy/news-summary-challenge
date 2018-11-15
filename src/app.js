let url = "https://content.guardianapis.com/search?api-key=a2b7e67e-d194-46ae-9d15-5b21a1fc543f";
fetch(url).then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  console.log(data);
  let stories = data.response.results;
  stories.forEach(story => {
    let para = document.createElement('p');
    para.innerHTML = `<a href="${story.webUrl}">${story.webTitle}</a>`
    document.body.appendChild(para);
  });
}).catch(err => {
  // Do something for an error here
  console.log(err);
});
