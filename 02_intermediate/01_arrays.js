const numbers = [1, 2, 3, 4, 5];

// map: 배열 요소 각각에 함수를 적용한 새로운 배열 반환
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: 조건에 맞는 요소만 포함한 새로운 배열 반환
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce: 배열 값을 누적 처리
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
