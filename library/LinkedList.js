/**
 * @typedef {Object} Node
 * @property {*} val
 * @property {Node|null} [next]
 */

/**
 * @class
 */
export class Node {
  /**
   * @param {*} val
   * @param {Node|null} [next=null]
   */
  constructor(val, next = null) {
    /** @type {*} */
    this.val = val;
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
    if (!node || typeof node !== "object" || node.val === undefined) {
      throw new Error("Invalid node: must be a Node instance with a val");
    }
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
    let current = typeof head !== "undefined" ? head : this.head;
    if (!current || typeof current.val === "undefined") {
      console.log("Invalid head node");
      return;
    }
    let output = "";

    while (current) {
      output += String(current.val);
      if (current.next) output += " -> ";
      current = current.next;
    }
    console.log(output);
  }

  /**
   * Makes the LinkedList iterable (for...of support)
   */
  [Symbol.iterator]() {
    let current = this.head;
    return {
      next() {
        if (current) {
          const val = current.val;
          current = current.next;
          return { val, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}
