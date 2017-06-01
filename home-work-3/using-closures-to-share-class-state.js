// Let's make a Cat constructor!


var Cat = (function() {

    var totalWeight = 0;
    var countInstances = 0;

    function Cat(name, weight) {
        if (arguments.length < 2) {
           throw new Error('Cats not instantiated with name, weight: ' + name + ', ' + weight);
        }
        this.name = name;
        Object.defineProperty(this, 'weight', {
            get: function() {
                return weight;
            },
            set: function(wi) {
                totalWeight -= (weight - wi);
                weight = wi;
            }
        });
        totalWeight += weight;
        countInstances += 1;
    }

    Cat.averageWeight = function() {
        return totalWeight / countInstances;
    };

    return Cat;

}());

//corrected test methods
fluffy = new Cat('fluffy', 15);
garfield = new Cat('garfield', 25);


Test.assertEquals(fluffy.weight, 15);
Test.assertEquals(fluffy instanceof Cat, true);
Test.assertEquals(fluffy.averageWeight, undefined);
Test.assertEquals(typeof Cat.averageWeight, "function");
Test.assertEquals(Cat.averageWeight(), 20);

