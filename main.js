const APIkey = '505aaccc-6eff-47f2-86d7-0c370f9a2dad';
const date = new Date().toJSON().slice(0, 10);
const newsQuery = `https://content.guardianapis.com/search?q=news,today&api-key=505aaccc-6eff-47f2-86d7-0c370f9a2dad&show-fields=thumbnail,bodyText&from-date=${date}`;
const headlines_container = document.getElementById('headlines');
const headlines_list = document.getElementById('headlines_list');
const newsCollection = [];
let newsData;


const openArticle = index => {
  headlines_container.innerHTML = '';
  const div = document.createElement('DIV');
  div.setAttribute('class', "card");
  const image = document.createElement('IMG');
  image.setAttribute('src', `${newsCollection[0][index].fields.thumbnail}`);
  image.setAttribute('class', "card-img-top");
  let title = document.createElement('H1');
  title.setAttribute('class', "card-title")
  title.textContent = newsCollection[0][index].webTitle;
  title.setAttribute("class", "card-title");
  title.setAttribute("id", `${index}`);
  let body = document.createElement('P');
  body.textContent = `${newsCollection[0][index].fields.bodyText}`;
  body.setAttribute('class', "card-text");
  headlines_container.appendChild(div);

  let btn = document.createElement('button');
  btn.innerHTML = "GO BACK";
  btn.setAttribute('onclick', 'location.reload()');
  div.appendChild(title);
  div.appendChild(body);
  title.appendChild(image);

  div.appendChild(btn);

}


const createHeadlines = () => {
  console.log(newsCollection)
  newsCollection[0].map((headline, index) => {
    let newHeadline = document.createElement('LI');
    newHeadline.textContent = newsCollection[0][index].webTitle;
    newHeadline.setAttribute("class", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
    newHeadline.setAttribute("id", `${index}`);
    const div = document.createElement('DIV');
    div.setAttribute('class', "image-parent")
    let newThumbnail = document.createElement('IMG')
    newThumbnail.setAttribute('src', `${newsCollection[0][index].fields.thumbnail}`)
    newThumbnail.setAttribute('class', "img-fluid")
    div.appendChild(newThumbnail)
    newHeadline.appendChild(div)
    newHeadline.setAttribute('onclick', `openArticle(${index})`)
    headlines_list.appendChild(newHeadline);
  })
}


document.addEventListener('DOMContentLoaded', () => {
  fetch(newsQuery)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw Error(response.status)
      alert(response.status)
    })
    .then(response => {
      newsCollection.push(response['response']['results']);
    })
    .then(() => createHeadlines())

})

