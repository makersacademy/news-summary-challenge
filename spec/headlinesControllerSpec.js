function checkHeadlinesPosting() {

    var view = '<div><a href=www.funwebsite.com>Fun</a></div>'
    var HeadlinesViewTest= function() {}

    headlinesController = new HeadlinesController(view, HeadlinesViewTest);
    headlinesController.showHtml()
    
    expect.toEqual(document.getElementById("articles").innerHTML === '<div><a href=www.funwebsite.com>Fun</a></div>')
}

checkHeadlinesPosting();