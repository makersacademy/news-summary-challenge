fetch(`https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html`, {
  method: 'GET',
  credentials: 'include',
  mode: 'cors',
  headers: {
    'X-AYLIEN-TextAPI-Application-Key': '8a94081e',
    'X-AYLIEN-NewsAPI-Application-Key': '13b78305933a0c8bdc7b399bcca21378'
  }
}).then(response => console.log(response.json()))
