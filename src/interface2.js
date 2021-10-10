function testArticles() {
    var requestOptions = {
        method: 'GET',
        redirect: 'manual'
      };
      
      fetch("https://newsapi.org/v2/top-headlines?apiKey=9fa8e7e3d3e04ef68567633a5f9e868f&country=gb&category=technology", requestOptions)
        .then(response => response.json())        
        .then(data => {

            let rootElement = document.getElementById("imageGalleryWithTitle");

            let articles = data.articles;

            articles.forEach(function(article) {  
                //Create the container
                var itemContainer = document.createElement("a");
                itemContainer.classList.add("article-container");
                var href = document.createAttribute("href");
                href.value = article.url;
                itemContainer.setAttributeNode(href);
                var target = document.createAttribute("target");
                target.value = '_blank';
                itemContainer.setAttributeNode(target);   
                
                //Create Image
                var image = document.createElement("img");
                image.classList.add("article-image");
                var src = document.createAttribute("src");
                src.value = article.urlToImage;
                image.setAttributeNode(src);
                // var alt = document.createAttribute("alt");
                // alt.value = articles[i].title;
                // image.setAttributeNode(alt);

                //Create title
                var h3 = document.createElement("h3");
                h3.classList.add("article-title");
                var h3Text = document.createTextNode(article.title);
                h3.appendChild(h3Text);
        
                //Atach image and title to container
                itemContainer.appendChild(image);
                itemContainer.appendChild(h3);
        
                //Attach element to root div
                rootElement.appendChild(itemContainer);
                
            })
        })
    }

testArticles()

