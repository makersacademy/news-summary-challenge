const getHeadlines = async () => {
    const endpoint = 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-elements=image&api-key=test'
    try { const response = await fetch(endpoint, {cache: 'no-cache'}); 
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse.response.results[0]);
    }
    } catch (error) {
      console.log(error)
    }
    
  }