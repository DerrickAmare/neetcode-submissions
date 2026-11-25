class ListNode{

    constructor(val , next = null, prev = null){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }

}


class MyLinkedList {
    constructor() {
        this.head = new ListNode();
        this.tail = new ListNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;

    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
       
       if (index < 0 || index >= this.size){
        return;
       }

      let curr = this.head;

       for (let i = 0; i < index; i++) {
        curr = curr.next;
       }

       return curr;
       
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        
        if (index < 0 || index >= this.size) {
            return -1;
        }

        let curr = this.head.next;

        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }

        return curr.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let newNode = new ListNode(val);
        let nextNode = this.head.next;

        newNode.prev = this.head;
        newNode.next = nextNode;
        // is it because we have a dummy node that we are using that as a starter node that we are able to sequeeze in the new node between it and the second node?
        this.head.next = newNode;
        nextNode.prev = newNode;

        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let newNode = new ListNode(val);
        let prevNode = this.tail.prev;

        newNode.prev = prevNode;
        newNode.next = this.tail;

        prevNode.next = newNode;
        this.tail.prev= newNode;

        this.size++;
    
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {

        if (index < 0 || index > this.size) {
            return;
        }

        let prev = this.head;
        
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }

        const next = prev.next;
        let newNode = new ListNode(val);
       
       // whats this.size used for and what is it?

       newNode.next = next;
       newNode.prev = prev;

       prev.next = newNode;
       next.prev = newNode;

       this.size++;

    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {

        if (index < 0 || index >= this.size) {
            return;
        }
        let curr = this.head.next;

        for (let i = 0; i < index; i++) {

            curr = curr.next;
        }

        curr.prev.next = curr.next;
       curr.next.prev = curr.prev;

    this.size--;
    }
}
