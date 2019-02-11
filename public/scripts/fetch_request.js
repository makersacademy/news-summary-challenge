var fetch_request = (address, display_handler, container) => {

   (function fetch_headlines(api = address){
      fetch(api)
         .then(function(response){
            return response.json();
         })
         .then(function(myJson){
            fetch_call_back(myJson)
         })
   })();
   /* is this call back doing to much? i just liked the idea of being able to give
      the fetche request an api address, how to display events and where - ifelt it would allow greater
      felxibility... ?
    */

   function fetch_call_back(res){
      convert(display_handler, res, container)
      let thumb =  display_handler.convert_all_to_thumb(x, container); 
      container.appendChild(thumb); 
   }

   function convert(display_handler, response, target_node){
      array = display_handler.get_array(Response);
      const parent_node = document.getElementById(target_node);
      for(let event of array){
          let thumb = base.create_thumbnail(make_elements(event));
          target_node.appendChild(thumb);
      }
  };
}