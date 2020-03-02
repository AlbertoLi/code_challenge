// Tie Breaker Questions

// Word Scramble: What is the Console Output
var sequence = [1, 7, 12, 8, 2, 0, 3, 9, 6, 10, 5, 11, 4]
var wordScramble = [
    ['A', 'Z', 'Y', 'M', 'C',' X', 'N', 'D', 'O', 'P', 'T', 'G', 'Q'],
    ['M', 'D', 'T', 'R', 'V',' S', 'L', 'P', 'I', 'C', 'X', 'O', 'N'],
    ['N', 'E', 'R', 'X', 'N', 'D', 'P', 'R', 'J', 'T', 'C', 'V', 'U'],
    ['H', 'X', 'M', 'B', 'E', 'I', 'N', 'P', 'J', 'X', 'E', 'V', 'O'],
    ['N', 'X', 'J', 'T', 'O', 'P', 'C', 'G', 'H', 'L', 'S', 'A', 'K'],
    ['O', 'F', 'L', 'D', 'V', 'B', 'R', 'W', 'R', 'O', 'H', 'F', 'B'],
    ['K', 'J', 'U', 'M', 'E', 'T', 'Y', 'E', 'B', 'M', 'C', 'V', 'I'],
    ['M', 'X', 'R', 'A', 'Z', 'I', 'T', 'F', 'K', 'V', 'U', 'M', 'X'],
    ['U', 'S', 'U', 'J', 'V', 'P', 'U', 'B', 'Q', 'X', 'I', 'N', 'I'],
    ['R', 'L', 'I', 'H', 'C', 'Y', 'D', 'J', 'N', 'G', 'T', 'R', 'E'],
    ['F', 'K', 'C', 'R', 'M', 'U', 'I', 'X', 'Z', 'E', 'R', 'L', 'I'],
    ['W', 'M', 'O', 'S', 'D', 'F', 'Y', 'T', 'P', 'U', 'L', 'C', 'B'],
    ['N', 'Y', 'J', 'K', 'I', 'R', 'P', 'L', 'F', 'O', 'X', 'B', 'U'],
]

var result : any = wordScramble.reduce((accum, curr) => accum + curr[sequence.pop()], '')
console.log(result) // CODECOMMUNITY



// Question 2: What is the Console Output
const pipeline = [
    array => { array.pop(); return array; },
    array => array.reverse()
  ];
  
var result = pipeline.reduce((xs, f) => f(xs), [1, 2, 3]); // [2, 1]


// Question 3: Write a reducer on users that will output a map users between age 18 and 59 [inclusive] from key=age, to value = [...user]
// Desired output  => 
//  [ { name: 'John', age: 30 },
//   { name: 'Jane', age: 28 },
//   { name: 'Jack', age: 30 } ]

var users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bill", age: 65 },
    { name: "Emily", age: 17 },
    { name: "Jack", age: 30 }
]

var reducedUsersSoln1= users.reduce((result, user) => {
    if (user.age >= 30) {
        result.push(user)
    }
    return result
}, [])
var reducedUsersSoln2 = users.reduce((result, user) => (user.age >= 18 && user.age <=59)? [...result, user] : result, [])
console.log(reducedUsersSoln2)

// var notAValidSolution = users.reduce((result, user) => user.age >= 30 ? result.push(user) : result, [])

