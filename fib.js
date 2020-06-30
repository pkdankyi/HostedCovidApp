function Fibonacci ( nthTerm, current=0, previous=1 ){
    if ( nthTerm <= 1) {
        // console.log(current)
        return current;
    }
    else {
        // console.log(current)
        return Fibonacci ( nthTerm - 1, current + previous, current )
    }
}
console.log(Fibonacci(9000))

function Fibonacci_2 ( nth_term ){
    if ( nth_term <= 0) {
        return 0;
    }
    if (( nth_term ===1 ) || ( nth_term ===2 )){
        return 1;
    }
    else {
        return Fibonacci_2 (nth_term-1) + Fibonacci_2 (nth_term-1) ;
    }
}

console.log(Fibonacci_2(9000))

// (function(){
//     function fib(n) {
//         if (n <= 0) return 0;
//         if (n === 1 || n === 2) return 1;
//         return fib(n-1) + fib(n-2);
//     }
//     console.log(fib(10000));
// })()

// (function(){
//     function fib(n, sum=0, prev=1) {
//       if (n <= 1) return sum;
//       return fib(n-1, prev+sum, sum);
//     }
//     console.log(fib(10000));
// })();