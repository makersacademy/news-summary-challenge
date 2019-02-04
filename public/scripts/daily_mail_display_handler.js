var daily_mail_display_handler = (function(response, target_node){

    const base = base_display_handler;

    function create_thumbnail(obj){
       
        let div_node = document.createElement('div');
        let elements = [
                        base.make_text_element('h3',obj.title),
                        base.make_text_element('p', obj.description),
                        base.make_text_element('p', obj.publishedAt),
                        base.make_image(obj.urlToImage)
                    ]

        for(let element of elements){
           div_node.appendChild(element);
        };
    
        return div_node;
    };
    
    function convert_all_to_thumb(array = response, target_node){
        array = array.articles;
        const parent_node = document.getElementById(target_node);
        for(let event of array){
            let thumb = create_thumbnail(event);
            parent_node.appendChild(thumb);
        }
    };
    
    return {
        create_thumbnail:create_thumbnail,
        convert_all_to_thumb : convert_all_to_thumb
    }
})();