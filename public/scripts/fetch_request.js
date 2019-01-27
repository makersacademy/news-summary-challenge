var fetch_request = (news_obj, display_handler, container) => {

   function fetch_headlines(news = news_obj){
      fetch(`${news.api_request}`)
         .then(function(response){
            return response.json();
         })
         .then(function(myJson){
            fetch_call_back(myJson.response.results)
         })
   }
   
   function fetch_call_back(x, news = news_obj){
      display_handler.convert_all_to_thumb(x, container);
      
   }
   
   return {
      fetch_headlines : fetch_headlines, 
      fetch_call_back : fetch_call_back
   }
}