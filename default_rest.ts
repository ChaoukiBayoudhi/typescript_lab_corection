function calculateSalary(salary,period=12, bonus=0) {
    
    return salary * period + bonus;
}
console.log(calculateSalary(1890));
console.log(calculateSalary(1890,9));
console.log(calculateSalary(1890,9,500));
//using arrow function
let salary = (salary: number, bonus: number = 0): number => salary * 12 + bonus;
console.log(salary(1890));

function calculateSalary_rest_version(salary,... args: number[]):number {
    let bonus = 0;
    let period = 12;
    if (args.length > 0) {
        bonus = args[0];
    }
    if (args.length > 1) {
        period = args[1];
    }
    
    return salary * period + bonus;
}
console.log(calculateSalary_rest_version(1890));
console.log(calculateSalary_rest_version(1890,500));
console.log(calculateSalary_rest_version(1890,500,9));