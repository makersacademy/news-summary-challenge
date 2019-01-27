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




    function make_image(img_src){
        let div = document.createElement('div');
        div.style.backgroundImage = `url(${img_src})`;
        div.style.height = '20vh';
        return div;
    }
}






var display_handler = (function(news_source_articles, target_node){

    function create_thumbnail(obj){
        let div_node = document.createElement('div');
        let elements = [
                        make_image(obj.fields.thumbnail),
                        make_text_element('h3',obj.webTitle),
                        make_text_element('p', obj.sectionName),
                        make_text_element('p', obj.webPublicationDate),
                        make_article_element('article', obj.id),
                        make_link( obj.webUrl, obj.id)
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




    function make_image(img_src){
        let div = document.createElement('div');
        div.style.backgroundImage = `url(${img_src})`;
        div.style.height = '20vh';
        return div;
    }

    return {
        create_thumbnail:create_thumbnail,
        convert_all_to_thumb : convert_all_to_thumb
    }
})();