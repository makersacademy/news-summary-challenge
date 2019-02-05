var daily_mail_display_handler = (function(response, target_node){

    const base = base_display_handler;

        /* make elements creates the paragraph elements */
    function make_elements(obj){
        return [
            base.make_text_element('h3',obj.title),
            base.make_text_element('p', obj.description),
            base.make_text_element('p', obj.publishedAt),
            base.make_image(obj.urlToImage)
        ]
    }

    /* both functions below seem repetitive and could be seperated out? */
    function get_array(array){
        array = array.articles
        return array;
    }

    
    function convert_all_to_thumb(array = response, target_node){
        array = get_array(array);
        const parent_node = document.getElementById(target_node);
        for(let event of array){
            let thumb = base.create_thumbnail(make_elements(event));
            parent_node.appendChild(thumb);
        }
    };
    
    return {
        convert_all_to_thumb : convert_all_to_thumb
    }
})();