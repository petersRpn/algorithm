function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1]  
    }
    return fib
}
console.log(fibonacci(1))
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(8))
console.log(fibonacci(10))


function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(1))
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(8))
console.log(factorial(10))


function isPrime(n) {
    if(n < 2){
        return false
    }
    for (let i = 2; i < n; i++) {
        if((n % i) === 0){
            return false
        }   
    }
    return true
}

console.log(isPrime(1))
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(8))
console.log(isPrime(10))


function isPowerOfTwo(n) {
    if(n < 1){
        return false
    }
    while (n > 1) {
        if((n % 2) !== 0){
            return false
        }
        n = n/2
}
return true
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(10))



function isPowerOfTwo(n) {
    if(n < 1){
        return false
    }
    return (n & (n-1)) === 0
    
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(10))

function recursiveFibonacci(n) {
    if (n < 2){
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)

}
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(5));
console.log(recursiveFibonacci(8))
console.log(recursiveFibonacci(10))


let array = [1, 2, 3, 4, 5, 6]
function linearSearch(){
    for (let i = 0; i < array.length; i++) {
     let element = array[i];
        
    }
    return element
    

}
console.log(linearSearch())
