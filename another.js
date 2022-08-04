//Find the prime number of a number n
const body = document.createElement('body');
const para = document.createElement('p')
html.appendChild(body);
body.appendChild(para);

function isPrime(n){
    if (n < 2) {
        return false 
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(5));
console.log(isPrime(9));
console.log(isPrime(10));
console.log(isPrime(7));

// Find the fibonacci of a number n

function fibonacci(n) {
if (n < 2) {
    return n  
}
const fib = [0,1];
for (let i = 2; i < n; i++) {
    fib[i] = fib[i-2] + (fib[i-1]);
}
return fib
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(10));
console.log(fibonacci(7));


//write a function to calculate the amount of element present in a fibonacci array using recursion
function recursiveFibonacci(n) {
if(n < 2) {
    return n
}
return recursiveFibonacci(n-2) + recursiveFibonacci(n-1)
}
console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(10));
console.log(recursiveFibonacci(7));


// find the factorial of the given number n

function factorial(n) {
let result = 1
for (let i = 2; i <= n; i++) {
    result*=i;
}
return result
}
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(10));
console.log(factorial(7));

//find the factorial of the given number using recursion

function recursiveFactorial(n) {
    if (n === 0) {
        return 1
    }
    return  n * recursiveFactorial(n - 1)
    }
    console.log(recursiveFactorial(5));
  

// Write a program to find if the element n is a power of two 
    function isPowerOfTwo(n) {
        if(n < 1){
            return false 
        }
        for (let i = 1; i < n; i++) {
            if((n % i) !== 0){
                return false
            }
            n =n/2
            
        }
        return true
    }
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(10));
console.log(isPowerOfTwo(7));

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

// why not use the bitwise operator to get the result

function isPowerOfTwoBitwise(n) {
    if (n < 2) {
        return true
    }
    return ((n & (n-1)) === 0)
}
console.log(isPowerOfTwoBitwise(5));
console.log(isPowerOfTwoBitwise(8));
console.log(isPowerOfTwoBitwise(10));
console.log(isPowerOfTwoBitwise(7));


// Using linear search algorithm sort the array of numbers
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (element === target){
            return i
        }
    }
    return -1
}
console.log(linearSearch([10, -2, -6, 8, 4], 4));

// Linear search algorithm

function linearSearch(arr, target) {
    arr.indexOf((value ) => {
        if (value === target) {
            return value
        }
        return -1
    })
}
console.log(linearSearch([10, -2, -6, 8, 4], 4));


//Binary search algorithm 



// Not correct willmake it correct on the long run

function binarySearch(arr, target){ 
    for (let i = 0; i < arr[arr.length-1]; i++) {
    let middleSearch = Math.floor((arr[0] + arr[arr.length-1])/2);
    let leftSearch = arr.slice(0, middleSearch);
    let rightSearch = arr.slice(middleSearch);

    if (middleSearch !== target) {
        if (target > middleSearch) {
            return rightSearch
            
        }
        if(target < middleSearch){
            return leftSearch
        }
        return i
    }
    return i

        
        
    }
}
console.log(binarySearch([-6, -2, 4, 6, 8], 4));

// Correct way of solving the binary search algorithm
function binarySearch(arr, target){ 
    let leftIndex = arr[0]
    let rightIndex = arr.length - 1


    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]) {
            return middleIndex
        }
        if( target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
console.log(binarySearch([-6, -2, 4, 6, 8], 4));


function recursiveBinarySearch(arr, target){   
    return search(arr, target, 0, arr.length - 1 )
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex
        
    }
    if(target < arr[middleIndex]){
        return search(arr, target, leftIndex, middleIndex - 1)
    } else{
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}
console.log(recursiveBinarySearch([-6, -2, 4, 6, 8], 4));


//Sort the element of the array using bubble sort method

function bubbleSort(arr){
       do {
        let sorted;
        for (let i = 0; i < arr.length-1; i++) {
            if ( arr[i] > arr[i+1]) {
            sorted = false
            let temp = arr[i];
            arr[i] = arr[i+1]
            arr[i+1] = temp
            sorted = true
            }   
        }
       } while (sorted);   
    return arr
}
console.log(bubbleSort([10, -2, -6, 8, 4]));

// sort the element of the array usin insertion sort method






