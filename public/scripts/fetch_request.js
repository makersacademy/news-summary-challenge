var Request = (news_obj) => {
  
    function fetch(news_obj){
        fetch(`${news_obj.get_fetch_string}`)
          .then((response)=>{
             return response.json();
          })
          .then(()=>{
              
          }){}
    }

}