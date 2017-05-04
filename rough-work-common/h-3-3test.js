
//corrected test methods
fluffy = new Cat('fluffy', 15);
garfield = new Cat('garfield', 25);


Test.assertEquals(fluffy.weight, 15);
Test.assertEquals(fluffy instanceof Cat, true);
Test.assertEquals(fluffy.averageWeight, undefined);
Test.assertEquals(typeof Cat.averageWeight, "function");
Test.assertEquals(Cat.averageWeight(), 20);