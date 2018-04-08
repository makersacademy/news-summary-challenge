console.log('apiHandler requests a json from an external API');
(function(){
    testObj = {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit suscipit recusandae consequuntur strum rerum est autem sunt rem eveniet architecto"};
    asyncExpectEqual = function(x) {
      if (x.title !== testObj.title) {
        console.log(`%c FAIL: ${x.title} is not equal to ${testObj.title}`, 'color: red');
      } else {
        console.log(`%c PASS: ${x.title} is equal to ${testObj.title}`, 'color: green');
      }
    };
    apiHandler.get('https://jsonplaceholder.typicode.com/posts/1',
    asyncExpectEqual, '')
  })();
