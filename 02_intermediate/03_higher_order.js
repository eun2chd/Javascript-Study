// 함수를 반환하는 고차 함수
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10

// 배열과 고차 함수 활용
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num ** 2);
console.log(squares); // [1, 4, 9, 16]
