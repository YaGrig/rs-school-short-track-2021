const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
class Queue {
  constructor () {
    this.head = null;
    this.count = 0;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    if (!this.head) {
      this.head = new ListNode(element);
      return this;
    }
    const result = this.head;
    this.head = new ListNode(element);
    this.head.next = result;
    this.count++;

    return this;
  }

  dequeue() {
    let deletedNode = null;

    let currentNode = this.head;
    if (currentNode !== null && this.count > 0) {
      while (currentNode.next && this.count !== 1) {
        this.count--;
        currentNode = currentNode.next;
      }
      deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
    } else {
      deletedNode = currentNode;
      currentNode = currentNode.next;
    }
    return deletedNode.value;
  }
}

module.exports = Queue;
