function articleFunctionsWorking() {
   var article = new Article('fun website', 'www.website.com');

    expect.toEqual(article.articleUrl() === 'www.website.com')
}

articleFunctionsWorking();