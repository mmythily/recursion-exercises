function countEvenToTwelve(number) {
    if (number <= 12) {
        console.log(number);
        countEvenToTwelve(number+2);
    }
}
countEvenToTwelve(0);

function multiply(number) {
    if (number < 100) {
        console.log(number);
        multiply(number * 4)
    }
}
multiply(2);