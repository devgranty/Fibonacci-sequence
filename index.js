const prompt = require('prompt-sync')({sigint: true});
const fibonacci = require('fibonacci-series');
const colors = require('colors');

/**
 * First step
 * 
*/
// clear before begin
console.clear();
const name = prompt(`? Please enter your name to continue  `.gray);
console.clear();


/**
 * Second step
 * 
*/
console.log('=>', 'Feel free to solve your problem in our program'.yellow, '\n\n');
console.log(`Hello ${name}, you are welcome to Mathematics department, Micheal Okpara University of Agriculture, Umudike.`, '\n');
console.log(`I can generate nth order term in the Fibonacci sequence`);
const proceed = prompt(`? Do you want to start solving the problem ? (Y/n)  `.gray);
console.clear();


/**
 * Third step
 * 
*/
if(['yes', 'y', 'Y', 'Yes'].includes(proceed)){
    console.log('=>', 'The Nth term'.yellow, '\n\n');
    const nth = prompt(`? Please, enter the nth term  `.gray);
    const nth_term = parseInt(nth);
    const fib_array = fibonacci(nth_term);
    // fix the no-zero fib sequence in fibonacci-series package
    fib_array.unshift(0);

    fib_array.forEach((value, index) => {
        console.log('------------------------');
        console.log(`${index} : ${value}`);
    });

}else{
    process.exit();
}