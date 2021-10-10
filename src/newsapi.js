export default class GetArticlesAPI {
    
    static getArticles () {

        var requestOptions = {
            method: 'GET',
            redirect: 'manual'
        };
        
        fetch("https://newsapi.org/v2/top-headlines?apiKey=9fa8e7e3d3e04ef68567633a5f9e868f&country=gb&category=technology", requestOptions)
            .then(response => response.json())
            .then(data => {
                for (const product of data.products) {
                    let listItem = document.createElement('li');
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
    }
        