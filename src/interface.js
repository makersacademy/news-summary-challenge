function createHeadline() {
    let item = document.createElement('li')
    let textnode = document.createTextNode(data.emojified_text)  
    item.appendChild(textnode)  
    document.querySelector('#all-headlines').appendChild(item) 
}

function createArticle() {
    let item = document.createElement('li')
    let textnode = document.createTextNode(data.emojified_text)  
    item.appendChild(textnode)  
    document.querySelector('#all-headlines').appendChild(item) 

    const para = document.createElement("p");
    const node = document.createTextNode(title);
    para.appendChild(node);
    const element = document.getElementById("app");
    element.appendChild(para);
    
    // title
    // description
    // content 
    // image 
}

function getArticles () {

    var requestOptions = {
        method: 'GET',
        redirect: 'manual'
    };
    
    fetch("https://newsapi.org/v2/top-headlines?apiKey=9fa8e7e3d3e04ef68567633a5f9e868f&country=gb&category=technology", requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (const product of data.articles) {
                let listItem = document.createElement('li')
                listItem.appendChild(
                document.createElement('strong')
                ).textContent = product.title;
                listItem.append(
                ` can be found in ${
                    product.Location
                }. Cost: `
                );
                listItem.appendChild(
                document.createElement('strong')
                ).textContent = product.description;
                myList.appendChild(listItem);
                document.querySelector('#app').appendChild(item) 
            }
            })
    }

function testArticles() {
    var requestOptions = {
        method: 'GET',
        redirect: 'manual'
      };
      
      fetch("https://newsapi.org/v2/top-headlines?apiKey=9fa8e7e3d3e04ef68567633a5f9e868f&country=gb&category=technology", requestOptions)
        .then(response => response.json())        
        .then(data => {
            let articles = data.articles;

            articles.forEach(function(article) {            

                let div = document.createElement("div")
                let news_item = document.createElement("div")
                let content = document.createElement("div")
                let title = document.createElement("div")
                let paragraph = document.createElement("div")
                let img = document.createElement("img")
                let h3 = document.createElement("h3")
                let p = document.createElement("p")
                let br = document.createElement("br")

                let t = document.createTextNode(article.description);

                div.className = "container"
                news_item.className = "news-item"
                img.className = "news-image"
                content.className = "infor-content"
                title.className = "title"
                paragraph.className = "paragraph"

                h3.innerHTML = article.title

                img.setAttribute("src", article.urlToImage)
                
                paragraph.appendChild(t)

                content.appendChild(h3)
                content.appendChild(img)
                content.appendChild(paragraph)

                news_item.appendChild(content)
                
                div.appendChild(news_item)
                div.appendChild(br)

                document.getElementById("app").appendChild(div);
                //document.getElementById("app").appendChild(news_item);

            })
        })
    }
      
        
    

function imageFunction() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "img_pulpit.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
    }

   

testArticles()
