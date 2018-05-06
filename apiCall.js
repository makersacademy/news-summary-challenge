let url = 'https://content.guardianapis.com/search?api-key=41dfe7aa-421b-4360-b1bd-5379fe29e9d3';
fetch(url).then(res => {
   if (res.status !== 200) {
       console.log('Theres a problem, status code: ' + res.status);
       return;  
   }

   res.json().then(function(data) {
       console.log(data);
       console.log(data.response.results[0].id);
       var body = document.getElementById('body');
       body.innerHTML = data.response.results[0].id; 

   });
});