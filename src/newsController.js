class newsController {
        static getNews(){
            fetch('https://content.guardianapis.com/search?api-key=8211367b-dd86-4027-927f-f5033656c8c4')
            .then((res) => res.json())
            .then(data => {
                console.log(data.response.results)
                for(let i=0; i<data.response.results.length; i++){
                    let li = document.createElement('li')

                    document.getElementById("app").innerHTML += "<h1>"+data.response.results[i].webTitle+"</h1>"
                }
                
                
            })
        }
}

newsController.getNews()