// Let's make a Cat constructor!
 var sum = 0, count=[];
 function Cat(name, weight) { 

if (typeof name == 'undefined' || typeof weight == 'undefined') {
         throw new Error('Cats not instantiated with name, weight: ' + name + ', ' + weight);
     }
  this.name = name;
  this.weight = weight;
  sum += this.weight;
  count.push(this);
 };

Object.defineProperty(Cat, "sum", {
     get: function () {
         return sum;
     },
     set: function () {
         sum = sum + cat.weight;
     }
 });
 


 Object.defineProperty(Cat, "averageWeight", {
     get: function () {
         return function () {
             return count ? sum / count.length : 0;
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

