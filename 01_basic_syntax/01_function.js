const multiply = (a, b) => {
    const result = a * b;
    console.log(`Result is : ${result}`);
    return result;
};

console.log(multiply(4,5));

const numbers = [1,2,3,4,5];
const squares = numbers.map(num => num * num);
console.log(squares);


