function twoSum(nums, target) {
    const indicesMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (indicesMap.hasOwnProperty(complement)) {
            return [indicesMap[complement], i];
        }

        indicesMap[nums[i]] = i;
    }

    return [];
}



console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6)); 
