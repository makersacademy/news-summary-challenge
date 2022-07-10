function getPostData() {
    return fetch(`https://content.guardianapis.com/search?section=environment&api-key=0e5a597b-efce-48ec-8dd8-7e522777c0ea&show-fields=all`)
    .then(response => {
        return response.json();
    });
};

function renderPost(postData) {
    console.log(postData)
    let postHeadingHTML = postData.response.results;
    return postHeadingHTML;
};

getPostData().then(post => {
    let rendered = renderPost(post);
    for(var i = 0; i < rendered.length; i++){
        let url = rendered[i].webUrl
        let title = rendered[i].webTitle
        let image = rendered[i].fields.thumbnail
        let bodyText = rendered[i].fields.bodyText
        let trailText = rendered[i].fields.trailText
        let element = document.getElementById("headline");
        let img = document.createElement("IMG")
        let a = document.createElement('a')
        let b = document.createElement('br')
        let c = document.createElement('br')
        let d = document.createElement('br')
        let p = document.createElement('p')
        p.setAttribute("onclick", `openArticle('${title}', '${image}', '${bodyText}', '${trailText}')`)
        p.setAttribute('id', "title")
        p.innerHTML = `${title}`
        img.setAttribute('src', image)
        a.setAttribute("href", url)
        a.innerHTML = "Click here for the full article...";
        element.appendChild(img)
        element.appendChild(b)
        element.appendChild(p)
        element.appendChild(a)
        element.appendChild(c)
        element.appendChild(d)
    };
});

function openArticle(title , image , bodyText , trailText){
    document.getElementById("overview").innerHTML = ""
    let div = document.getElementById("overview")

    let h1 = document.createElement("h1")
    let h5 = document.createElement("h5")
    let img = document.createElement("IMG")
    let p = document.createElement("p")

    h1.innerHTML = title
    h5.innerHTML = trailText
    p.innerHTML = bodyText
    img.setAttribute('src', image)

    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(h5)
    div.appendChild(p)
}

function findArticle(){

}