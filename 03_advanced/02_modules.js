// 1. 기본 내보내기 (Default Export)
const greet = name => `Hello, ${name}!`;
export default greet;

// 2. 이름 있는 내보내기 (Named Export)
export const PI = 3.14;
export const square = num => num * num;

// 다른 파일에서 사용하기
// import greet from './greet.js';
// import { PI, square } from './math.js';

// greet('Alice'); // Hello, Alice!
// console.log(PI); // 3.14
// console.log(square(5)); // 25
