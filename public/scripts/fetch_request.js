var fetch_request = (address, display_handler, container) => {

   (function fetch_headlines(api = address){
      console.log(api);
      fetch(api)
         .then(function(response){
            return response.json();
         })
         .then(function(myJson){
            console.log(myJson);
            fetch_call_back(myJson)
         })
   })();
   
   function fetch_call_back(x){
      display_handler.convert_all_to_thumb(x, container);  
   }
}