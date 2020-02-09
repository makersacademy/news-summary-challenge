describe('hello test', expect("hello").toEq("hello"))

describe('hello fail', expect("hello").toEq("hi"))

describe('hello array pass', expect(["hello", "hi", "bye"]).contains("hello"))

describe('hello array fail', expect(["hi", "bye"]).contains("hello"))

describe('class matcher fail', expect(2).toBeA("hello"))

describe('class matcher pass', expect("hi").toBeA("hello"))

describe('string contains letter', expect('hello').contains("h"))
