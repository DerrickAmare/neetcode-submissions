class MinStack {
    constructor() {
     this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        
    }

    /**
     * @return {void}
     */
    pop() {
        delete this.stack.pop();

    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1];

    }

    /**
     * @return {number}
     */
    getMin() {
        let min = 2**31-1;
        for ( let i = 0; i < this.stack.length; i++){
         min = Math.min(min,this.stack[i]);
        }
       return min; 
    }
}
