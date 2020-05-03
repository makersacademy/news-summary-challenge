
fetch('https://content.guardianapis.com/search?api-key=fed10329-e5b5-4ed3-afda-6ac7a6d00245')
    .then(res => res.json())
    .then(data => console.log(data))