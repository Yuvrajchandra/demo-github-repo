function testFunction() {
  var x = 1;
  var y = 7;
  if (x === 1) {
    console.log('This is a test');
  }
}

class TestClass {
  constructor() {
    this.value = 42;
  }

  method() {
    console.log('Method in TestClass');
  }
}

const testInstance = new TestClass();
testInstance.method();
