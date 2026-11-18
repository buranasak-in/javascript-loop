// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
let result = [];
for (let i = 0; i < scores.length; i++) {
    let newScores = scores[i] - 10;
    result.push(newScores);
}
console.log(result);

// ลองเขียนแบบ for of
// let result = [];
// for (let newScores of scores) {
//     newScores = newScores - 10;
//     result.push(newScores);
// }
// console.log(result);
