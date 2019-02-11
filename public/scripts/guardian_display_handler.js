var guardian_display_handler = (function(response, target_node){

    const base = base_display_handler;

  
    /* make elements creates the paragraph elements */
    function make_elements(obj){
        let elements = [
                    base.make_text_element('h3',obj.webTitle),
                    base.make_text_element('p', obj.sectionName),
                    base.make_text_element('p', obj.webPublicationDate),
                    base.make_article_element('article', obj.id),
                    base.make_link( obj.webUrl, obj.id)
                ]

    if(obj.fields){
        elements.push(base.make_image(obj.fields.thumbnail),)
    }
    return elements
    }
    
    /* both functions below seem repetitive and could be seperated out? */
    function get_array(array){
        array = array.response.results;
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
