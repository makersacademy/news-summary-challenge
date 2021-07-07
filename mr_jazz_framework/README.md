# Mr_Jazz's test framework

Mr Jazz is a simple test framework written in javascript in order to enable us to test our Mr. Jazz's Note application.   
## Installation


In order to install Mr Jazz, you need to download the repo as a zip file and move it into your working directory. 
Ensure that both your source and your spec files are required in the SpecRunner.html.
Run your tests by opening SpecRunner in your browser and open the console to see the tests run.

## Operation


Mr Jazz works along the same lines as Jasmine with Describe and It blocks that contain a number of matcher functions within.
Mr Jazz also has a beforeEach function that allows you to run a function within a describe block before each it block.

Your tests should be laid out like the below.
 ```
describe('Demo',function(){
  var demo;
  beforeEach(function(){
    demo = new Demo();
  })

  it("returns 'Hello World!'", function(){
    expect(demo.sayHello()).toEqual('Hello World!');
  });

  it("equals 'Hello World!'", function(){
    expect(demo.sayHello()).toEqual('Hello World!');
  });
})

```
# Matcher functions


Mr Jazz comes with a number of pre-written matcher functions to allow you to test your code. 
These include:


## Expect


expect takes the expected returned output of whatever function you are testing and allows you to run the matcher functions on it. 
It should be written like the below, not the lower case e.
```
expect(demo.sayHello()).toEqual('Hello World!');
```
## toEqual

To Equal allows you to compare two objects and see if they are the same. 
You can compare arrays, functions, strings, integers and objects.

## toInclude

To include allows you to check whether an element is in an array. 
toInclude works with all sorts of objects but not with nested arrays.

## toBeEmpty

toBeEmpty allows you to check whether an array is empty

## throwsError

throwsError allows you to check whether a function throws an error or not.

## Writing doubles and using them

```
var double = stuntDouble(doublename, [method1, method2, method3, ...],
                        [result1, result2, result3, ...])
```

Example

```
var plane = stuntDouble('plane', ['land','takeOff'], ['true','false'])
```

```
console.log(plane.land())
// prints true

console.log(plane.takeOff())
// prints false
```

## feature testPass

```
feature(feature_name,function(){
  scenario(scenario_name,function(){
    fillIn(id, content)
    click(id)
    hasContent(content)
    })
  })
```
Put view.html page inside src folder and all spec files in the spec folder include the following at the bottom of your body, babajaz.js and any spec files underneath that

```
<script src='../babajaz.js'></script>
<script src='../spec/Featurespecs.js'></script>
