feature('does stuff',function(){
  scenario('fills in',function(){
    fillIn('new_to_do', 'hello')
    click('submit')
    hasContent('hello')
  })
})
