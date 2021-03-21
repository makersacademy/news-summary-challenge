function getImage(news) {
    let url = news.webUrl
    const endpoint = 'https://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=' + url
    try { const response = await fetch(endpoint, {cache: 'no-cache'}); 
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse)
      return jsonResponse
    }
    } catch (error) {
      console.log(error)
  }
} 
