/**
 * @typedef {Object} Node
 * @property {*} value
 * @property {Node|null} [next]
 */

/**
 * @class
 */
export class Node {
  /**
   * @param {*} value
   * @param {Node|null} [next=null]
   */
  constructor(value, next = null) {
    /** @type {*} */
    this.value = value;
    /** @type {Node|null} */
    this.next = next;
  }
}

/**
 * @class
 */
export class LinkedList {
  /**
   * @param {Node} node
   */
  constructor(node) {
    /** @type {Node|null} */
    this.head = node;
    /** @type {Node|null} */
    this.tail = node;
    /** @type {number} */
    this.length = node ? 1 : 0;
  }

  /**
   * @param {Node} node
   * @returns {void}
   */
  append(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  /**
   * @param {Node} head
   * @returns {void}
   */
  traverse(head) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let current = head ? head : this.head;
    let output = "";
    while (current) {
      output += current.value;
      if (current.next) output += " -> ";
      current = current.next;
    }
    console.log(output);
  }
}
