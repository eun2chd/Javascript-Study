const person = {
  name: 'Alice',
  age: 25,
  hobby: 'reading',
};

// 속성 접근
console.log(person.name); // 'Alice'

// 속성 추가
person.job = 'developer';
console.log(person); // { name: 'Alice', age: 25, hobby: 'reading', job: 'developer' }

// 객체 속성 순회
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
