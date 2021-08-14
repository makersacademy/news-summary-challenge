document.addEventListener("DOMContentLoaded", () => { 
  const getHeadlines = async (callback) => {
    await fetch ('https://content.guardianapis.com/search?&q=debate&api-key=test')
    .then(response => response.json)
  }

  console.log(getHeadlines());

});