// var: 함수 스코프 (거의 사용하지 않음)
var x = 10;
console.log(x);

// let: 블록 스코프
let y = 20;
y = 30;
console.log(y);

// const: 블록 스코프, 재할당 불가
const z = 40;
// z = 50; // 오류 발생
console.log(z);