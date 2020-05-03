'use strict';

it('has an id when created', function() {
    var article = new Article(24)
    expect(article.id).toEqual(24);
})