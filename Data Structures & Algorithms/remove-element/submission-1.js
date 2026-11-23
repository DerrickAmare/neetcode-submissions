class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;

        for (let i =0; i<nums.length;i++){
            if (nums[i] === val) {
              delete nums[i];
            } else {
                k++;
            }
        }
        nums.sort();
        return k;
    }
}
