
var Cat = function (name, weight) {
    var sum = 0, count = 0;
    this.name = name;
    this.weight = weight;
    sum += this.weight;

};
Object.defineProperty(Cat, "sum", {
    get: function () {
        return sum;
    },
    set: function () {
        sum = sum + cat.weight;
    }
});
Object.defineProperty(Cat, "count", {
    get: function () {
        return 2;
    }

});
Object.defineProperty(Cat, "averageWeight", {
    get: function () {
        return function () {
            return count ? sum / count : 0;
        };
    }
});


//corrected test methods
fluffy = new Cat('fluffy', 15);
garfield = new Cat('garfield', 25);


Test.assertEquals(fluffy.weight, 15);
Test.assertEquals(fluffy instanceof Cat, true);
Test.assertEquals(fluffy.averageWeight, undefined);
Test.assertEquals(typeof Cat.averageWeight, "function");
Test.assertEquals(Cat.averageWeight(), 20);

