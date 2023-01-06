/*
 * Complete the 'fibonacci' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER n as parameter.
 */

function fibonacci(num) {
    var i = 0, arr = [];

    function fib(number) {
        var a = 1, b = 0, temp;

        while (number >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            number--;
        }

        return b;
    }

    for (i = 0; i < num; i++) {
        arr.push(fib(i))
    }
    return arr;
}

module.exports = fibonacci;
