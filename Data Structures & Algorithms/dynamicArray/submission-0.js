class DynamicArray {

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.emptyArray = new Array (capacity);
        this.capacity = capacity;
        this.size = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.emptyArray[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.emptyArray[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if ( this.size === this.capacity ) {
            this.resize();
        }

        this.emptyArray[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        const value = this.emptyArray[this.size-1];
        this.size--;
        return value;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity*=2;
        const arr = new Array(this.capacity);

        for (let i = 0; i < this.size; i++) {
            arr[i] = this.emptyArray[i];
        }
        this.emptyArray = arr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {

        return this.capacity;
    }
}
