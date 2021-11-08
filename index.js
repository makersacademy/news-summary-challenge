console.log("Miaow, I'm here");

fetch(
  "https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail"
)
  .then((response) => response.json()) //run json and get the body
  .then((jsonedResponse) => {
    let olEl = document.getElementById("headlines");
    let headlines = jsonedResponse.response.results;
    headlines.forEach((element) => {
      let li = document.createElement("li");
      li.innerText = element.webTitle;
      olEl.appendChild(li);
      console.log(element);
      let br1 = document.createElement("br");
      li.appendChild(br1);
      let br2 = document.createElement("br");
      li.appendChild(br2);
      let img = document.createElement("img");
      img.src = element.fields.thumbnail;
      li.appendChild(img);
      let br3 = document.createElement("br");
      li.appendChild(br3);
      let br4 = document.createElement("br");
      li.appendChild(br4);
    });
  }); //JS cannot print out a JS object, needs to be stringified if used with document.write
