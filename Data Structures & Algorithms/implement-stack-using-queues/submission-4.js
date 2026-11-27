class MyStack {
    constructor() {
        this.q1 = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q1.push(x);
        let size = this.q1.size();
        while (size > 1) {
            this.q1.push(this.q1.pop());
            size--;
        }
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
        return this.q1.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q1.isEmpty();
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
