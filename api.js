apiView = require("./apiview")

async function retrieve(search) {

    const apiKey = 'c56ade02-1dfc-40b9-979d-edf2e8c11027'

    
    
    let url = `https://content.guardianapis.com/search?q=${result}&api-key=${apiKey}`

    const payload = await fetch(url)

    const JSON = await payload.json()

    return JSON.response?.results;
 
}


module.exports = retrieve;

