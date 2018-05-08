function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;

  if (typeof this.sayName != 'function') {
    Person.prototype.sayName = function() {
      console.log(this.name);
    }
  }
}


var friend = new Person('Nicholas', 29, 'Software Enginner');
friend.sayName();



// 动态原型模式「
// 
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     if(typeof this.load!='function'){
//         Person.prototype={
//             constructor:Person,
//             job:'vip',
//             load:function(){
//                 console.log(name,age);
//             }
//         }
//     }
// }
//
// var toti=new Person('toti',18);
// toti.load();
// 」动态原型模式
