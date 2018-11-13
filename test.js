// class Animal {
//   constructor(name){
//     this.name = name
//   }
//   getName(){
//     return this.name
//   }
// };
// class Dog extends Animal {
//   bark(){
//     return `Dog ${this.name} is barking`
//   }
// }
// var dog = new Dog('Aban');
// console.log(dog.getName() === 'Aban');
// console.log(dog.bark() === 'Dog Aban is barking');

function Animal(name){
  this.name = name;
  this.getName = function(){
    return this.name;
  }
}
function Dog(name){
  Animal.call(this,name);
  this.bark = function(){
    return "Dog " + this.name + " is barking"
  }
}
var dog = new Dog('Aban');
console.log(dog.getName() === 'Aban');
console.log(dog.bark() === 'Dog Aban is barking');