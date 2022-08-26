/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
constructor() {
    this.items = [];
}

/**
 * Compares this queue to another given queue to see if they are equal.
 * Avoid indexing the queue items directly via bracket notation, use the
 * queue methods instead for practice.
 * Use no extra array or objects.
 * The queues should be returned to their original order when done.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Queue} q2 The queue to be compared against this queue.
 * @returns {boolean} Whether all the items of the two queues are equal and
 *    in the same order.
 */
compareQueues(q2){
    if(this.isEmpty()){
        return false;
    }
    if(this.size() != q2.size()){
        return false;
    }
    for(let i = 0; i < this.items.length; i++){
        let firstVal = this.dequeue();
        let secondVal = q2.dequeue();
        if(firstVal != secondVal){
            return false;
        }
        this.enqueue(firstVal);
        q2.enqueue(secondVal);
    }
    return true;
}

/**
 * Determines if the queue is a palindrome (same items forward and backwards).
 * Avoid indexing queue items directly via bracket notation, instead use the
 * queue methods for practice.
 * Use only 1 stack as additional storage, no other arrays or objects.
 * The queue should be returned to its original order when done.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {boolean}
 */
isPalindrome() {
let isPalin = true;
const stack = new Stack(),
    len = this.size();

for (let i = 0; i < len; i++) {
    let dequeued = this.dequeue();
    stack.push(dequeued);
    // add it back so the queue items and order is restored at the end
    this.enqueue(dequeued);
}

for (let i = 0; i < len; i++) {
    let dequeued = this.dequeue();
    let popped = stack.pop();

    if (popped !== dequeued) {
    isPalin = false;
    }

    // add it back so the queue items and order is restored at the end
    this.enqueue(dequeued);
}
return isPalin;
}

/**
 * Adds a new given item to the back of this queue.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @param {any} item The new item to add to the back.
 * @returns {number} The new size of this queue.
 */
enqueue(item) {
    this.items.push(item);
    return this.size();
}

/**
 * Removes and returns the first item of this queue.
 * - Time: O(n) linear, due to having to shift all the remaining items to
 *    the left after removing first elem.
 * - Space: O(1) constant.
 * @returns {any} The first item or undefined if empty.
 */
dequeue() {
    return this.items.shift();
}

/**
 * Retrieves the first item without removing it.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @returns {any} The first item or undefined if empty.
 */
front() {
    return this.items[0];
}

/**
 * Returns whether or not this queue is empty.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @returns {boolean}
 */
isEmpty() {
    return this.items.length === 0;
}

/**
 * Retrieves the size of this queue.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @returns {number} The length.
 */
size() {
    return this.items.length;
}
}

let newQ = new Queue();
newQ.enqueue(2);
newQ.enqueue(3);
newQ.enqueue(4);
console.log(newQ);

let compareQ = new Queue();
compareQ.enqueue(2);
compareQ.enqueue(3);
compareQ.enqueue(4);
console.log(compareQ);

console.log(newQ.compareQueues(compareQ));