// 함수 선언
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 화살표 함수
const add = (a, b) => a + b;
console.log(add(5, 3));

// 매개변수가 하나일 경우 괄호 생략 가능
const square = x => x * x;
console.log(square(4)); // 16


const multiplyAndLog = (a, b) => {
  const result = a * b;
  console.log(`Result is: ${result}`);
  return result;
};
console.log(multiplyAndLog(4, 5)); // 출력: "Result is: 20", 20


// map: 배열의 모든 요소에 함수 적용
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16]

// filter: 조건에 맞는 요소만 추출
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce: 누적 값 계산
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10


// 객체와 화살표 함수
const createUser = (name, age) => ({ name, age });
const user = createUser("Alice", 25);
console.log(user); // { name: "Alice", age: 25 }

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];

// 나이순 정렬
users.sort((a, b) => a.age - b.age);
console.log(users);
/* 출력:
[
  { name: "Bob", age: 20 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 30 }
]
*/


// 기본 매개변수
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5));    // 5 (b는 기본값 1 사용)
console.log(multiply(5, 2)); // 10
