
var guardian_display_handler = (function(news_source_articles, target_node){

    const base = base_display_handler;

    function create_thumbnail(obj){
       
        let div_node = document.createElement('div');
        let elements = [
                        base.make_text_element('h3',obj.webTitle),
                        base.make_text_element('p', obj.sectionName),
                        base.make_text_element('p', obj.webPublicationDate),
                        base.make_article_element('article', obj.id),
                        base.make_link( obj.webUrl, obj.id)
                    ]
        // will tidy later but im tired and this only just happened not all post have pics lol
        if(obj.fields){
            elements.push(base.make_image(obj.fields.thumbnail),)
        }
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
    
    return {
        create_thumbnail:create_thumbnail,
        convert_all_to_thumb : convert_all_to_thumb
    }
})();