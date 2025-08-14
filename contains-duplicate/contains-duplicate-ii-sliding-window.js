function containsDuplicate(nums, k)
{
    const window = new Set();

    for (let i=0; i<nums.length;i++) {
        if(window.has(nums[i])) {
            return true;
        }
        window.add(nums[i]);
        if (window.size > k) {  
            window.delete(nums[i-k])
        }
        
    }
    return false;
}

console.log(containsDuplicate([1,2,3,1], 3))
console.log(containsDuplicate([1,0,1,1],1))
console.log(containsDuplicate([1,2,3,1,2,3],2))
console.log(containsDuplicate([5,6,7,5,8],2))
console.log(containsDuplicate([5,6,7,5,8],2))
console.log(containsDuplicate([5,6,7,5,8],2))
console.log(containsDuplicate([99,99],2))