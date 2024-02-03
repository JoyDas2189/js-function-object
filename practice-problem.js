// Problem 1.
// Write a function called foo() whick prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call the foo() function to see the output.

/* 
function foo () {
    function bar () {
        console.log("bar");
    }
    console.log("foo");
}
foo();
 */

// Problem : 2
// Write a function called make_avg() which will take three integers and return the average of those values.

/* 
var make_avg = (a, b, c) => {
    var average = ((a + b + c)/3);
    return average;
}
var firstNumber = 10;
var secondNumber = 20;
var thirdNumber = 30;

console.log(make_avg(firstNumber, secondNumber, thirdNumber));
 */

// Problem : 3

// Write a function called make_avg whick will take an array of integers and the size of that array and return the average of those values.
/* 
var make_avg = (myArr) => {
    var total= 0;
    for (var i = 0; i <= myArr.length; i++){
        var sum = myArr[i];
    }
    var average = total/sum;
    return average;

}
var myArr = [10, 20, 30];
make_avg(myArr);

 */


// Problem 4: 

// Write a function called odd_even() which will take an integer value and tells wheather this value is even or odd
/* 
function odd_even (input) {
    if(input %  2 === 0) {
        console.log("This is an even number");
    }
    else {
        console.log("This is a odd number");
    }
    return input;
}
odd_even(13);
 */

// Problem 5: 

var signal = "yellow";

/* 
if(signal === "red") {
    console.log("It's dangerous.");
}
else if (signal === "yellow") {
    console.log("You should stop.");
}
else if (signal === 'green') {
    console.log("Cross the road.");
}
else {
    console.log("Wait up!");
}
 */

switch(signal) {
    case "red":
        console.log("It's dangerous.");
        break;
    case "yellow":
        console.log("You should stop");
        break;
    case "green":
        console.log("Cross the road");
        break;
    default:
        console.log("Wait up!!!");
}