def test_function():
    x = 1
    # y = 5
    if x == 1:
        print("This is a test")


class TestClass:
    def __init__(self):
        self.value = 42

    def method(self):
        print("Method in TestClass")


test_instance = TestClass()
test_instance.method()
