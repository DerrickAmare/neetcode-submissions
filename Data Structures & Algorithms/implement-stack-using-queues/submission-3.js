class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q1.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        return this.q1.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.q1[this.q1.length-1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q1.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
