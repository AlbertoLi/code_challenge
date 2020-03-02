// Using map, write a function that takes in a list of numbers and returns a list of numbers where 
// each element in the list is multiplied by 10.
// Input  => [1,2,3,4,5,6,7,8,9,10]
// Output => [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

var nums = [1,2,3,4,5,6,7,8,9,10]

function q1(nums) : number[] {
    return nums.map(x => x * 10)
}

console.log(q1(nums))

// Solution
// const q1 = nums => nums.map(x => x * 10)