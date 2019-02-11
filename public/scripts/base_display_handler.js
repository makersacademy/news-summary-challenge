
var base_display_handler = function(handler){

    function convert_all_to_thumb(array = news_source_articles, target_node){
        const parent_node = document.getElementById(target_node);
        for(let event of array){
            let thumb = create_thumbnail(event);
            parent_node.appendChild(thumb);
        }
    };

    function make_text_element(element, string){
        let _ = document.createElement(element);
         _.innerText = string;
        return _;
    };

    
    function make_article_element(element, string){
        let _ = document.createElement(element);
        _.innerText = 'hover to see more ....';
        _.setAttribute('name', string);
        return _;
    };


    function make_link(url, id){
        var a = document.createElement('a');
        var linkText = document.createTextNode("visit site");
        a.appendChild(linkText);
        a.title = `${id}`;
        a.href = `${url}`;
        return a;
    }

    function make_element(tagname, value) {
        if (['h3', 'p'].contains(tagname)) {
            return make_text_element(tagname, value)
        }
        if (tagname === 'img') {
            return 
        }
        throw new Error(`unsupoorted element "${tagname}"`)
    }

    function make_image(img_src){
        let div = document.createElement('div');
        div.style.backgroundImage = `url(${img_src})`;
        div.style.height = '20vh';
        return div;
    }

    function create_thumbnail(element_array){
       
        let div_node = document.createElement('div');
        for(let element of element_array){
           div_node.appendChild(element);
        };
    
        return div_node;
    };

    return {
        convert_all_to_thumb : convert_all_to_thumb,
        make_image : make_image,
        make_article_element: make_article_element,
        make_link : make_link,
        make_text_element: make_text_element,
        create_thumbnail: create_thumbnail
    }
}();