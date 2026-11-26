class ListNode {
    constructor (val, prev =null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class MyDeque {
    constructor() {
        this.head = new ListNode();
        this.tail = new ListNode();

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head.next === this.tail;
    }

    /**
     * @param {number} value
     */
    append(value) {
       let curr = this.tail.prev; 
       let newNode = new ListNode(value);

       newNode.prev = curr;
       newNode.next = curr.next;

       curr.next = newNode;
       this.tail.prev= newNode;

    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
       let curr = this.head; 
       let newNode = new ListNode(value);

       newNode.prev = curr;
       newNode.next = curr.next;

       curr.next = newNode;
       newNode.next.prev = newNode;
       this.head.next = newNode;

    }

    /**
     * @return {number}
     */
    pop() {

 if (this.head.next === this.tail){
                return -1;
            }

   let curr = this.tail.prev;
   let beforeNode = curr.prev;


   curr.next = curr;
   curr.next.prev = curr;

   this.tail.prev = beforeNode;
   beforeNode.next = this.tail;


   return curr.val;
        
    }

    /**
     * @return {number}
     */
    popleft() {

        if (this.isEmpty()){
            return -1;

        }

    let curr = this.head.next;
    let aftercurr = curr.next;

    aftercurr.prev = curr;
    this.head = curr;
    
return curr.val;

    }
}
