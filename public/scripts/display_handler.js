
var DisplayHandler = function(news_source_articles, target_node){

    function create_thumbnail(obj){
        let div_node = document.createElement('div');
        let elements = [
                        make_element('h3',obj.title),
                        make_element('p', obj.details),
                        make_element('p', obj.date)
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
        create_thumbnail:create_thumbnail,
        convert_all_to_thumb : convert_all_to_thumb,
        make_element: make_element
    }
}