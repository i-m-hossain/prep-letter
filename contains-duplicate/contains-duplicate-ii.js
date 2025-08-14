
// https://leetcode.com/problems/contains-duplicate-ii/description/

var containsDuplicate = function(nums, k) {
    const seen = {}
    for (const [key, value] of nums.entries()){
        if (seen[value] && ((key+1 - seen[value]) <= k)){
            return true;
        } 
        seen[value] = key+1
        
    }
    return false
    
}

console.log(containsDuplicate([1,2,3,1], 3)) //true
console.log(containsDuplicate([1,0,1,1],1)) //true
console.log(containsDuplicate([1,2,3,1,2,3],2)) //false
console.log(containsDuplicate([5,6,7,5,8],2)) //false
