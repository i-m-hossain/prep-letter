
// https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function(nums) {
    const sortedNums = nums.sort((a, b)=> a-b)
    const length = sortedNums.length
    let result = false
    sortedNums.forEach((element, index) => {
        if( index != length-1 && element == sortedNums[index+1]){
            result = true
        };
    }); 
    return result
    
}

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
