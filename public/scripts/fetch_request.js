var fetch_request = (news_obj) => {
   
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
      console.log('hi')
      news_obj.data = x;
      convert_all_to_thumb(news.data, 'guardian-container');
   }

   function create_thumbnail(obj){
      let div_node = document.createElement('div');
      let elements = [
                      make_element('h3',obj.webTitle),
                      make_element('p', obj.sectionName),
                      make_element('p', obj.webPublicationDate)
                  ]
      for(let element of elements){
         div_node.appendChild(element);
      };
  
      return div_node;
  };
  
  function convert_all_to_thumb(array = news_source_articles, target_node){
      const parent_node = document.getElementById(target_node);
      for(let event of array){
          let thumb = create_thumbnail(event);
          parent_node.appendChild(thumb);
      }
  };
  
  function make_element(element, string){
      let _ = document.createElement(element);
       _.innerText = string;
      return _;
  };
   
   return {
      fetch_headlines : fetch_headlines, 
      fetch_call_back : fetch_call_back
   }
}