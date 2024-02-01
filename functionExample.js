let getAverage = (assignment1, assignment2, assignment3) =>{
    let totalMarks  = assignment1 + assignment2 + assignment3;
    let averageMarks = totalMarks / 3;
    return averageMarks;
}
let assignment1 = 50;
let assignment2 = 48;
let assignment3 = 49;

let myAverage = getAverage(assignment1, assignment2,assignment3);
console.log(`My Average so far : ${myAverage}`);