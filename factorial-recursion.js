function factorial (num) {
    if (num === 0) { //base case
        return 1;
    }
    else { //recursive case
        return num * factorial(num - 1);
    }
}

console.log(factorial(5))