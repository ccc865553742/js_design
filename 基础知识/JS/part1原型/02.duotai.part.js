var makeSound = function (animal) {
  if (animal && animal.sound instanceof Function) {
    animal.sound();
  }
}


var Duck = function() {}
Duck.prototype.sound = function() {
  console.log('嘎嘎嘎');
}

var Chicken = function() {}
Chicken.prototype.sound = function() {
  console.log('咯咯咯');
}

var Dog = function() {}
Dog.prototype.sound = function() {
  console.log('汪汪汪');
}

makeSound(new Duck())
makeSound(new Chicken())
makeSound(new Dog())
