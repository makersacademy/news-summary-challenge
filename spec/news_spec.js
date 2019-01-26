describe('News',()=>{
  can('get headlines',()=>{
    let news = new News
    let headlines =[]
    let fakeRequest = {request:() => {}}
    headlines.push(fakeRequest.request())
    expect(headlines.length).toEq(1)
  })
})
