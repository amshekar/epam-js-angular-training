function construct(Class) {
    return new Class(arguments[1]);
}

function construct(Class) {
    return new (Class.bind.apply(Class, arguments))()
}
function construct(Class, ...arg) {
    return new Class(...arg);
}

Test.describe("Test Greeting", function () {

    function Greeting(name) {
        this.name = name;
    }

    Greeting.prototype.sayHello = function () {
        return "Hello " + this.name;
    };


    Greeting.prototype.sayBye = function () {
        return "Bye " + this.name;
    };

    Test.it("Test methods and attributes", function () {
        var greeting = construct(Greeting, 'John');
        Test.assertEquals(greeting.name, 'John', 'name should be John');
        Test.assertEquals(greeting.sayHello(), 'Hello John', 'sayHello() should work');
    });

    Test.it("Test create two objects", function () {
        var greeting = construct(Greeting, 'John');
        var greeting2 = construct(Greeting, 'John');
        Test.assertNotEquals(greeting, greeting2, 'Calling twice to constructor method produces different objects');
    });

    Test.it("Test prototype and constructor properties", function () {
        var greeting = construct(Greeting, 'John');
        Test.assertEquals(greeting instanceof Greeting, true, 'greeting should be an instance of Greeting');
        Test.assertEquals(Object.getPrototypeOf(greeting), Greeting.prototype, 'greeting prototype should be the same as Greeting prototype');
        Test.assertEquals(greeting.constructor, Greeting, 'greeting constructor should be Greeting');
    });
});

Test.describe("Test List", function () {

    function List() {
        this.values = Array.prototype.slice.call(arguments);
    }

    List.prototype.sum = function () {
        return this.values.reduce(function (ac, value) {
            return ac + value;
        }, 0);
    };

    Test.it("Test methods and attributes", function () {
        var list = construct(List, 1, 2, 3, 4, 5);
        Test.assertSimilar(list.values, [1, 2, 3, 4, 5], 'list.values should be [1, 2, 3, 4, 5]');
        Test.assertEquals(list.sum(), 15, 'list.sum() should be 15');
    });

    Test.it("Test prototype and constructor properties", function () {
        var list = construct(List, 1);
        Test.assertEquals(list instanceof List, true, 'list should be an instance of List');
        Test.assertEquals(Object.getPrototypeOf(list), List.prototype, 'list prototype should be the same as List prototype');
        Test.assertEquals(list.constructor, List, 'list constructor should be List');
    });

});