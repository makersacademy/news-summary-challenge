var request = new XMLHttpRequest()

request.open('GET', "https://content.guardianapis.com/search?api-key=c2856b15-2089-4310-b8b5-dbe287674c9f")
request.send()

request.onload = () => {
    if (request.status === 200) { 
        console.log(JSON.parse(request.response))
    } else {
        console.log("error")
    }
}
