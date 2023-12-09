//sans arrow function
function add(x: number, y: number): number {
    return x + y;
    }
console.log(add(5, 5))
//using arrow function
let result = (x: number, y: number): number => x + y;
console.log(result(10, 10))
