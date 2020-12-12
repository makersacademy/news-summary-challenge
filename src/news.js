class News {
    constructor(){
        this.listOfArticles = []
    }

    getNewsArticles(){
        fetch('https://content.guardianapis.com/search?api-key=8211367b-dd86-4027-927f-f5033656c8c4')
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            for(let i=0; i<data.response.results.length; i++){
                this.listOfArticles.push(data.response.results[i].webTitle)
                // document.getElementById("app").innerHTML += "<h1>"+data.response.results[i].webTitle+"</h1>"
            }
        })
    }

    output(){
        let htmlString = "<ul>"
        for(let i = 0; i < this.listOfArticles.length; i++){
        htmlString += "<li>" + this.listOfArticles[i] + "</li>"
        }
        console.log("HI"+htmlString)
        return htmlString
    }
}