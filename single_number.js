/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length == 1){
        return nums[0];
    }

    nums.sort();
    for(let i=1; i < nums.length; i+=2){
        if(nums[i] != nums[i-1]){
            return nums[i-1];
        }
    }

    return nums[nums.length-1];
};
