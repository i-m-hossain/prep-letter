class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person("imran", 30);

let test1 = person;
let test2 = person;

test2.name = "im.hossain";

test2.age = 33;

console.log(person.name, person.age);
