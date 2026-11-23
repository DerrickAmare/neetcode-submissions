class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {

        let ans = [];
        let sum = 0;

        for ( let i = 0; i < operations.length; i++) {

            if ( operations[i] === "C") {
              ans.pop();
            } else if ( operations[i] === "D") {
                ans.push(ans[ans.length-1] * 2);
            } else if ( operations[i] === "+") {
               ans.push(ans[ans.length-1]+ans[ans.length-2]);
            } else {
              ans.push(Number(operations[i]));
            }
        }

        for ( let s of ans) {
            sum +=s;
        }
        return sum;
    }
}
