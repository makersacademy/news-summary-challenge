const guardianInfo = fetch("https://content.guardianapis.com/search?api-key=test&show-fields=thumbnail&show-blocks=all")
                     .then(response => response.json())
                     .then(data => {
                        return data
                     });