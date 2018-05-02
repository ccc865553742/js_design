// 原型模式


// 原型模式的实现关键，是语言本身是否提供了clone方法。ECMAScript 5 提供了Object.create 方法可以用来克隆对象
//
var Plane = function() {
  this.blood = 100;
  this.attackLevel = 1;
  this.defenseLevel = 1;
}
var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;


var clonePlane = Object.create(plane);

console.log(clonePlane);


// 在不支持 Object.create 方法的浏览器中, 则可以使用以下代码
// Object.create = Object.create || function(obj) {
//   var F = function() {}
//   F.prototype = obj;
//
//   return new F();
// }

var typeOf = function(f) {
  return Object.prototype.toString.call(f).replace(/(\[|\])/g,'').split(' ')[1].toLocaleLowerCase()
}

var deepCopy = function(data) {
    const t = typeOf(data)
    let o;

    if (t === 'array') {
      o = []
    } else if (t === 'object') {
      o = {}
    } else {
      return data;
    }

    if (t === 'array') {
      for (let i = 0; i < data.length; i++) {
        o.push(deepCopy(data[i]))
      }
    } else if (t === 'object') {
      for (let i in data) {
        o[i] = deepCopy(data[i]);
      }
    }

    return o;
}


var obj1 = {
  name: 'xiaoming',
  age: 18,
  sex: 'man',
  school: '光明职业学院',
  level: [1,2,3]
}

var obj2 = deepCopy(obj1);
obj2.age = 19;
console.log(obj2, obj1);


// 原型编程范式至少要包括以下基本规则
// 1. 所有数据都是对象
// 2. 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它
// 3. 对象会记住它自己的原型
// 4. 如果对象无法响应某个请求， 它会把这个请求委托给它自己的原型

// javaScript中的根对象是 Object.prototype 对象, Object.prototype对象是一个空对象
//
// 可以使用 es5 提供的Object.getPrototypeOf 来查看2个对象的原型

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
}

// var a = new Person('sven')
//
// console.log(a.name);
// console.log(a.getName());
// console.log(Object.getPrototypeOf(a) === Person.prototype);

var objectFactory = function() {
  var obj = new Object(),
      Constructor = [].shift.call(arguments); // 取得外部传入的构造函数

  obj.__proto__ = Constructor.prototype; // 指向正确的原型

  var ret = Constructor.apply(obj, arguments); // 借用外部传入的构造器给obj设置属性

  return typeof ret === 'object' ? ret : obj; // 确保构造器总是会返回一个对象
}

var p = objectFactory(Person, 'sven');

console.log(p.name);
console.log(p.getName());
console.log(Object.getPrototypeOf(p) === Person.prototype);
