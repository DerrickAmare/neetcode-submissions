class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        // check for opening and closings
        // traverse through string to check brackets
        // if nothing is left return true
        // keep in mind of order
        // get a stack to stack up your string

        let stack = [];
       const brs = {
         ")" : "(",
         "}" : "{",
         "]" : "["
       };

       for ( let c of s ) {
         if ( brs[c] ){
     if (stack.length > 0 && stack[stack.length-1] === brs[c]){
                stack.pop();
             }else {
                return false;
             }
         } else {
            stack.push(c);
         }
    
       } 

        return stack.length === 0;
    

    }
}
