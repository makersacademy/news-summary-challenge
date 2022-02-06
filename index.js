class Index {
  hello() {
    console.log('Hello');
    return 'Hello!';
  } 
}

const index = new Index();
return index.hello();

module.exports = Index;