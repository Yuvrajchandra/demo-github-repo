## Demo GitHub Repo

This project ensures consistent formatting and linting for Python and JavaScript code using pre-commit hooks. Configuring the formatters and linters for all the languages created many dependency issues, so lastly, I decided to start with Python and JS and then proceed to add the rest of them one by one.

## Prerequisites

- Node.js and npm
- Python and virtualenv

## Setup

1. **Install npm dependencies**
    ```bash
    npm install
    ```

2. **Create a virtual environment and install Python dependencies**
   For Windows:
    ```bash
    virtualenv myenv
    myenv\Scripts\activate
    pip install -r requirements.txt
    ```
    For Mac and Linux:
    ```bash
    virtualenv myenv
    source myenv/bin/activate
    pip install -r requirements.txt
    ```
3. **Install the git hook scripts**
    ```bash
    pre-commit install
    ```

## Adding Test Files

Create your Python and JavaScript test files with the following content to test the configuration:

### test.py
```python
def test_function():
    x = 1
    y = 5 # <----
    z = 9 # <----
    if x == 1:
        print('This is a test') # <----

class TestClass:
    def __init__(self):
        self.value = 42

    def method(self):
        print("Method in TestClass")

test_instance = TestClass()
test_instance.method()
```

### test.js
```javascript
function testFunction() { // <----
  var x = 1; // <----
  var y = 7; // <----
  if (x === 1) {
      console.log("This is a test"); // <----
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
```

## Testing the Configuration

1. **Stage the changes**
    ```bash
    git add .
    ```

2. **Commit the changes**
    ```bash
    git commit -m "testing"
    ```

The pre-commit hooks will automatically fix the formatting issues and prevent the commit if there are any linting errors. The command prompt will display what was formatted and where the code needs to be fixed.
