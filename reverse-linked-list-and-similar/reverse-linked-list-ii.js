import { LinkedList, Node } from "../library/LinkedList.js";
import { print } from "../utills/utills.js";

var reverseBetween = function (head, left, right) {
  const dummy = new Node(0);
  dummy.next = head;
  let pre = dummy;

  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  let current = pre.next;
  for (let i = 0; i < right - left; i++) {
    const temp = current.next;
    current.next = temp.next;
    temp.next = pre.next;
    pre.next = temp;
  }

  return dummy.next;
};

let numbers = [1, 2, 3, 4, 5];
let left = 2;
let right = 4;
const ll = new LinkedList();
for (const num of numbers) {
  ll.append(new Node(num));
}

const res = reverseBetween(ll.head, left, right);
ll.traverse(res);
