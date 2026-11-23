class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
let result=0 ;
        for (let i=0; i<nums.length; i++){
       let counter = 0;
         for ( let j = i; j < nums.length; j++) {

            if (nums[j] === 0 ){
                break;
            }
               counter++;

         }
         result = Math.max(result, counter);
        }
        return result;
    }
}
