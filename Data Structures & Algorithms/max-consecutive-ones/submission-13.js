class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let cnt = 0 , res =0;
        for (let i =0; i<nums.length; i++){
            if (nums[i]===0){
                 res = Math.max(res,cnt);
                cnt = 0;
            } else{
                cnt++;
            }
        }
        return Math.max(res,cnt);
    }
}
