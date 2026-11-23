class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let arr2 = new Array();
        let n = nums.length;

        for ( let i = 0; i < n; i++ ) {
            arr2[i] = nums[i];
            arr2[i+n] = nums[i];
           
        }
         
        // for ( let j = n-1; j < 2n; j++){
        //     arr2[j]= nums[i];
        //    }  
    return arr2;
    }
}
