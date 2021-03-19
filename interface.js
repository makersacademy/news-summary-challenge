'use strict';

const dataset = [
  { 
    id: 0,
    heading: "1st dummy heading",
    img: "images/dummy.jpeg",
},
  { 
    id: 1,
    heading: "2nd dummy heading",
    img: "images/dummy.jpeg",
}]

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {  
  dummyDataLoad()
//create a div
//add a pic
//add the headline below

});

function dummyDataLoad() {
  let parentdiv = document.createElement('div')
  parentdiv.id='headlines'

  for(let index = 0; index < dataset.length; index++) {
    if(dataset[index].img) {
      let div = document.createElement('div')
      let h3 = document.createElement('h3')
      let img = document.createElement('img')
      img.src = dataset[index].img
      h3.textContent = dataset[index].heading
      div.appendChild(img)
      div.appendChild(h3)
      parentdiv.appendChild(div)
    }
  }

  document.body.appendChild(parentdiv)
};
//l8r
//add hyperlinks

// load full title