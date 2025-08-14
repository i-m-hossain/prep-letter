
// https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function(nums) {
    const seen = {}
    for (const num of nums){
        if (seen[num]) return true
        seen[num] = "exist"
    }
    return false
    
}

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
