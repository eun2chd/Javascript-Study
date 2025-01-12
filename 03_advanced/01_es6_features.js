// 1. 화살표 함수 (Arrow Functions)
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// 2. 클래스 (Class)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Hello, my name is Alice and I am 30 years old.

// 3. 템플릿 리터럴 (Template Literals)
const name = 'Bob';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Bob!

// 4. Promise (비동기 처리)
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data fetched!');
  }, 2000);
});

fetchData.then(response => console.log(response)); // Data fetched!

// 5. let, const
let mutableVar = 10; // 값을 변경할 수 있는 변수
const immutableVar = 20; // 값을 변경할 수 없는 상수
