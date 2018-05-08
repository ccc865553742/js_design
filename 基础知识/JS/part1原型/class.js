class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}



class Dog extends Animal {
  constructor(name) {
    super(name)
  }

  speak() {
    return 'woof'
  }
}

var dog = new Dog('Scamp');
console.log(dog.getName() + ' says ' + dog.speak());

/**
 *  该章节 介绍的原型模式的主要介绍了prototype 请求委托
 *
 * 使用构造函数创建对象
 */
