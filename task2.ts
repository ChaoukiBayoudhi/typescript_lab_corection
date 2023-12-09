function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
    }

//call this function
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3));
console.log(sum(1, 2));
console.log(sum());

const sumArrow = (...numbers: number[]): number =>
numbers.reduce((acc, num) => acc + num, 0);

//call the arrow function
console.log(sumArrow(1, 2, 3, 4, 5));