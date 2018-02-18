it('should store a headline', function(){
   let article = new Article('All politicians agree to solve climate change');
   assert.equals(article.headline, 'All politicians agree to solve climate change')
})

it('should store a link', function(){
   let article = new Article('All politicians agree to solve climate change',
                              'www.coolestSite.com');
   assert.equals(article.link, 'www.coolestSite.com')
})
