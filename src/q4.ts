export const pipe = (...fns) => args => fns.reduce((arg, f) => f(arg), args);
const map = fn => arr => arr.map(fn)
const filter = fn => arr => arr.filter(fn)
const classmates = [{
    name: "Charlie",
    age: 20,
    sex: "male",
    likabilityScore: 95,
    isKind: true
}, {
    name: "Riley",
    age: 23,
    sex: "female",
    likabilityScore: 78,
    isKind: false
}, {
    name: "Alex",
    age: 25,
    sex: "female",
    likabilityScore: 77,
    isKind: true
}, {
    name: "Skyler",
    age: 21,
    sex: "male",
    likabilityScore: 86,
    isKind: false
}]

const mysteryFunction1 = arr => map(x => x.isKind ? {...x, likabilityScore: x.likabilityScore + 4} : x)(arr)
const mysteryFunction2 = arr => filter(x => x.likabilityScore >= 80)(arr)

var closeFriends = pipe(
    filter(x => x.age >= 21), // Keep classmates whose age >= 21
    mysteryFunction1,         // Add +4 to all classmates who are kind
    mysteryFunction2,         // Keep classmates whose likabilityScore >= 80
    map(x => (x.name))        // Just take classmates' name
)(classmates)

console.log(closeFriends) // [Alex, Skyler]

// Input: array of people
// Rule: bump up likability score of classmates who are kind by +4

// Output: array of names of closeFriends
// Criteria:
// age >= 21
// score >= 80
